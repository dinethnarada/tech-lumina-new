import React from 'react';
import { theme } from '@/styles/theme';

interface PageBackgroundProps {
  children: React.ReactNode;
}

/**
 * PageBackground component provides a consistent background style for all pages
 * It uses the standard gradient defined in the theme configuration
 */
const PageBackground: React.FC<PageBackgroundProps> = ({ children }) => {
  return (
    <section className={`min-h-screen ${theme.colors.gradients.page}`}>
      <div className="mx-auto max-w-5xl md:px-4 pt-32 pb-32">
        {children}
      </div>
    </section>
  );
};

export default PageBackground;
