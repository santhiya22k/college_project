"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Use the frontend environment variable for API base URL
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed ❌");
      return;
    }

    alert("Login successful ✅");
    router.push("/admin"); // navigate to admin panel
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Backend not running ❌");
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Input label="Email" type="email" placeholder="admin@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}
