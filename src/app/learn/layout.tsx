import React from 'react';
import SharedLayout from '@/components/SharedLayout';

interface LearnLayoutProps {
  children: React.ReactNode;
}

const LearnLayout: React.FC<LearnLayoutProps> = ({ children }) => {
  return (
    <SharedLayout>
      {children}
    </SharedLayout>
  );
};

export default LearnLayout; 