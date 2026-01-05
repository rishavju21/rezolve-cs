import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';

export function MainLayout() {
  return (
    <div className="flex h-screen bg-background min-h-0">
      <AppSidebar />
      <main className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
