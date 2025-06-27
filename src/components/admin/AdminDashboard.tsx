import { useEffect, useState } from 'react';
import { db, auth } from '../../firebase';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const AdminDashboard = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  // 🔐 Cek apakah admin sudah login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/admin/login');
      } else {
        setIsAuthChecked(true); // ✅ Autentikasi sukses
      }
      setLoading(false); // Firebase sudah selesai mengecek
    });
    return () => unsubscribe();
  }, [navigate]);

  // 📦 Ambil data dari Firestore
  const fetchData = async () => {
    const q = query(collection(db, 'pendaftaran-siswa'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'pendaftaran-siswa', id));
      toast.success('Data berhasil dihapus');
      fetchData();
    } catch (error) {
      toast.error('Gagal menghapus data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ⏳ Tampilkan loading saat autentikasi masih diproses
  if (!isAuthChecked || loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary" />
        <p className="ml-4 text-gray-500">Memuat data admin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Dashboard Admin</h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-4 border">Nama Depan</th>
                <th className="py-2 px-4 border">Nama Belakang</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Program</th>
                <th className="py-2 px-4 border">Whatsapp</th>
                <th className="py-2 px-4 border">Tanggal Daftar</th>
                <th className="py-2 px-4 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-100">
                  <td className="py-2 px-4 border">{item.foreName}</td>
                  <td className="py-2 px-4 border">{item.middleName}</td>
                  <td className="py-2 px-4 border">{item.email}</td>
                  <td className="py-2 px-4 border">{item.program}</td>
                  <td className="py-2 px-4 border">{item.whatsapp}</td>
                  <td className="py-2 px-4 border text-sm text-gray-600">
                    {item.createdAt?.toDate().toLocaleString('id-ID', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
                    Tidak ada data pendaftar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
