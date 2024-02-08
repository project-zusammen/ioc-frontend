import React from 'react';

import { DashboardTemplate } from '@/components/app/dashboard/templates';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <DashboardTemplate>{children}</DashboardTemplate>
    </main>
  );
}
