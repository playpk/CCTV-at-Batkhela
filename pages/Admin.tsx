
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const SidebarItem = ({ name, icon }: { name: string; icon: string }) => (
    <button 
      onClick={() => setActiveTab(name)}
      className={`w-full flex items-center gap-3 px-6 py-4 transition-all ${activeTab === name ? 'bg-blue-600 text-white border-r-4 border-blue-200' : 'text-slate-400 hover:bg-slate-800'}`}
    >
      <span>{icon}</span>
      <span className="font-medium">{name}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 flex text-slate-100 ltr" dir="ltr">
      {/* Sidebar */}
      <div className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="p-8">
          <Link to="/" className="text-xl font-bold tracking-wider text-blue-500 uppercase">CCTV ADMIN</Link>
        </div>
        <nav className="flex-grow">
          <SidebarItem name="Dashboard" icon="📊" />
          <SidebarItem name="Orders" icon="📦" />
          <SidebarItem name="Customers" icon="👥" />
          <SidebarItem name="Products" icon="🏷️" />
          <SidebarItem name="Messages" icon="💬" />
          <SidebarItem name="Settings" icon="⚙️" />
        </nav>
        <div className="p-6">
           <Link to="/" className="text-sm text-slate-500 hover:text-white underline">Back to Website</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-10 bg-slate-900">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-slate-400">Super Admin</p>
            </div>
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">A</div>
          </div>
        </header>

        {activeTab === 'Dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm">Total Orders</p>
              <p className="text-3xl font-bold mt-2">124</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm">New Inquiries</p>
              <p className="text-3xl font-bold mt-2 text-green-400">12</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm">Product Stock</p>
              <p className="text-3xl font-bold mt-2 text-blue-400">45</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm">Revenue</p>
              <p className="text-3xl font-bold mt-2">PKR 152k</p>
            </div>
          </div>
        )}

        {/* Dummy Table */}
        <div className="mt-12 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700 font-bold">Recent {activeTab}</div>
          <table className="w-full text-left">
            <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {[1,2,3,4,5].map(i => (
                <tr key={i} className="hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">#ORD-2024-{i}</td>
                  <td className="px-6 py-4">User Name {i}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">Completed</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">Oct {i+10}, 2024</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
