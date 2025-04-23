export const metadata = {
  title: 'Service Level Agreement (SLA) : Explained with a Real World Example | Tech Lumina Blog',
  description: 'Learn about Service Level Agreements (SLAs) through a real world example of a bakery e-commerce website. Understand key components like availability, performance, security, and maintenance.',
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-black/50 via-[#332b00]/80 to-[#2b0058]/50">
      <div className="mx-auto max-w-5xl md:px-4 pt-32 pb-20">
        <div className="px-6 md:px-0 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Service Level Agreement (SLA) : Explained with a Real World Example
          </h1>
          
          <div className="flex items-center text-sm text-gray-400 mb-12">
            <span>April 18, 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Let&apos;s say a client approaches us to build a website for their bakery that sells products across the entire country. 
              This isn&apos;t just any small website. It&apos;s a large-scale platform that will handle lots of traffic and transactions. 
              For projects like this, it&apos;s important to clearly define expectations between the client and the development team. 
              That&apos;s where a Service Level Agreement (SLA) comes in.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Here&apos;s what we typically include in an SLA at Tech Lumina:
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">📶 1. Availability</h2>
            <p className="mb-6">
              We need to ensure the website is accessible to customers most of the time. If the site goes down, it could mean 
              losing potential sales. While it&apos;s impossible to guarantee 100% uptime (due to maintenance or uncontrollable 
              infrastructure issues), the SLA will include:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Guaranteed uptime percentage (e.g., 99.9%)</li>
              <li>Acceptable reasons for downtime (Scheduled maintenance or third-party infrastructure failures)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">⚡ 2. Performance</h2>
            <p className="mb-6">
              Speed matters. If a customer tries to order bread or cake and the site takes forever to load, it&apos;s a bad experience. 
              So we define:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Response times (e.g., time to load product listings)</li>
              <li>Throughput (e.g., number of orders the system can handle per second)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">🔒 3. Security</h2>
            <p className="mb-6">
              Security is non-negotiable, especially when dealing with customer data and online payments. We include details on:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Encryption standards (e.g., SSL)</li>
              <li>Firewall protection (e.g., Web Application Firewall - WAF)</li>
              <li>Authentication & Authorization (e.g., Single Sign-On - SSO)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">🔧 4. Maintenance</h2>
            <p className="mb-6">
              Even after launching, the site needs care. Maintenance helps keep it running smoothly and up to date. The SLA covers:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Scheduled maintenance windows (e.g., 1:00 AM – 3:00 AM)</li>
              <li>Maintenance procedures (e.g., who needs to give approval before major updates)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">💾 5. Data Recovery</h2>
            <p className="mb-6">
              Unexpected failures can happen. That&apos;s why we plan ahead to protect critical customer and order data. We include:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Backup strategies</li>
              <li>Recovery time objectives (how quickly we&apos;ll restore the system after failure)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Support & Issue Resolution</h2>
            <p className="mb-6">
              If something goes wrong, our team steps in to fix it. The SLA defines:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Support availability (e.g., 24/7 support)</li>
              <li>Issue classification (e.g., Criticality and Priority)</li>
              <li>It&apos;s crucial to have clear expectations about system availability.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Feature Updates</h2>
            <p className="mb-6">
              Sometimes, clients want new features like a product recommendation system. The SLA also covers:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>How and when new features can be requested</li>
              <li>Timeframes and cost estimations for adding them</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Other Key Elements</h2>
            <p className="mb-6">
              In addition to the points above, every SLA also includes:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Agreement period</li>
              <li>Payment terms</li>
              <li>Signatures from both parties to make the agreement official</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">At Tech Lumina</h2>
            <p className="mb-8">
              We provide a Service Level Agreement for all software projects that exceed $300. This ensures transparency, 
              accountability, and peace of mind for both us and our clients.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
