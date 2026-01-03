import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';

export function MainLayout() {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
