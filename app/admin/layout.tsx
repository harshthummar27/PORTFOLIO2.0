import { redirect } from 'next/navigation';
import { verifyAdminSession } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await verifyAdminSession();

  if (!isAuthenticated) {
    redirect('/admin-login');
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-64 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

