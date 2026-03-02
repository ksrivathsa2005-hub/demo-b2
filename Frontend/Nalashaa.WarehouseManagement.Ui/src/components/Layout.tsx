import { Outlet } from 'react-router-dom';
import { TopNav } from '../components/TopNav';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#f4f7fb]">
      <TopNav />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
