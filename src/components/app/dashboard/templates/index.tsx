import Link from 'next/link';
import React, { ReactNode } from 'react';

const menu = [
  { label: 'Dashboard', route: '/dashboard' },
  { label: 'Leaderboard', route: '/dashboard/leaderboard' },
];

interface DashboardTemplateProps {
  children: ReactNode;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[260px] space-y-4 border-r-2 border-slate-200 p-6">
        <div className="text-center text-2xl font-bold">
          <p>IOC</p>
        </div>
        <div>
          {menu.map(({ label, route }) => {
            return (
              <Link href={route} key={label} className="block">
                <div className="flex cursor-pointer items-center gap-4 rounded-xl p-3 hover:bg-secondary">
                  <div>{label}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
      <main className="w-[calc(100vw-230px)] overflow-auto p-6">{children}</main>
    </div>
  );
};
