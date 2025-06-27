// src/components/admin/AdminLogin.tsx
import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Mohon isi email dan password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login berhasil!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Login gagal. Periksa email dan password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-white px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">Admin Login</h2>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Admin"
            className="w-full p-3 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-semibold transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
