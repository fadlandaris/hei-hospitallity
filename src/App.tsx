
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import Registration from './components/Registration'
import Home from './page/Home'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <main>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path="/pendaftaran-siswa" element={<Registration />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </main>
  )
}

export default App