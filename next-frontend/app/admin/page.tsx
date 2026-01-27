"use client";

import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const router = useRouter();

  const handleLogout = () => {
    // ✅ Replace with real logout API
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">Dashboard Item 1</div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">Dashboard Item 2</div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">Dashboard Item 3</div>
      </section>
    </div>
  );
}
