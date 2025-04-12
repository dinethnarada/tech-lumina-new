"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PlexusBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Limit pixel ratio to 2 for better performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x6f9fff,
      size: 0.08,
      transparent: true,
      opacity: 1,
    });

    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6f9fff,
      transparent: true,
      opacity: 0.4,
    });

    // Camera position
    camera.position.z = 5;

    // Pre-create line geometries pool
    const lineGeometriesPool: THREE.BufferGeometry[] = [];
    const maxLines = particleCount * particleCount;
    const linesGroup = new THREE.Group();
    scene.add(linesGroup);

    for (let i = 0; i < maxLines; i++) {
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(6), 3));
      lineGeometriesPool.push(lineGeometry);
    }

    // Track time for frame limiting
    let lastTime = 0;
    const frameInterval = 1000 / 30; // 30 FPS limit

    // Animation
    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);

      // Limit frame rate
      if (currentTime - lastTime < frameInterval) return;
      lastTime = currentTime;

      // Update particle positions
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Boundary check and reverse direction
        if (Math.abs(positions[i * 3]) > 5) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i].z *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Clear previous lines
      linesGroup.clear();
      let lineIndex = 0;

      // Draw lines between nearby particles
      for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 2.5 && lineIndex < maxLines) {
            const lineGeometry = lineGeometriesPool[lineIndex];
            const positions = lineGeometry.attributes.position.array as Float32Array;
            
            positions[0] = x1;
            positions[1] = y1;
            positions[2] = z1;
            positions[3] = x2;
            positions[4] = y2;
            positions[5] = z2;

            lineGeometry.attributes.position.needsUpdate = true;
            const line = new THREE.Line(lineGeometry, lineMaterial);
            linesGroup.add(line);
            lineIndex++;
          }
        }
      }

      renderer.render(scene, camera);
    };

    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    animate(performance.now());

    // Cleanup
    return () => {
      // Stop animation loop
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }

      // Clean up geometries and materials
      particles.geometry.dispose();
      particlesMaterial.dispose();
      lineMaterial.dispose();
      lineGeometriesPool.forEach(geometry => geometry.dispose());

      // Clean up scene
      scene.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      // Remove event listener
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);

      // Remove canvas
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Clear scene and remove references
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default PlexusBackground;
