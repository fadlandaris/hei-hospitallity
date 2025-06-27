// src/pages/Registration.tsx
import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { programData, logoData } from '../data/data';
import { PERSON_4, PERSON_5, PROGRAM, HERO, LOGO } from '../assets/assets';
import { User, Envelope, WhatsappLogo, AppWindow } from 'phosphor-react';
import Marquee from 'react-fast-marquee';
import { toast } from 'react-hot-toast';

const Registration = () => {
  const [form, setForm] = useState({
    foreName: '',
    middleName: '',
    email: '',
    program: '',
    whatsapp: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.foreName || !form.middleName || !form.email || !form.program || !form.whatsapp) {
      toast.error('Semua kolom harus diisi!');
      return;
    }

    try {
      await addDoc(collection(db, 'pendaftaran-siswa'), {
        ...form,
        createdAt: Timestamp.now(), // ⬅️ Tambahkan timestamp
      });
      toast.success('Pendaftaran berhasil!');
      setForm({ foreName: '', middleName: '', email: '', program: '', whatsapp: '' });
    } catch (error) {
      console.error('Gagal kirim:', error);
      toast.error('Terjadi kesalahan saat mengirim data!');
    }
  };

  return (
    <div className="h-screen relative grid grid-cols-2 px-16 pb-16">
      <div className="absolute bg-gradient-to-b from-primary/20 to-white w-[500px] h-64 rounded-4xl top-16 right-32" />
      <div className="mt-16 relative flex flex-col justify-between">
        <h1 className="text-5xl leading-14">
          Daftar Sekarang di Hospitality <br /> Education Institute
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-y-8">
          <div className="grid grid-cols-2 gap-x-8">
            <div className="relative">
              <input
                className="p-4 pl-12 rounded-xl border border-primary/40 shadow bg-lightgray w-full"
                type="text"
                placeholder="Nama Depan"
                value={form.foreName}
                onChange={(e) => setForm({ ...form, foreName: e.target.value })}
              />
              <User className="absolute top-1/2 -translate-y-1/2 left-4 text-primary" weight="fill" />
            </div>
            <div className="relative">
              <input
                className="p-4 pl-12 rounded-xl border border-primary/40 bg-lightgray w-full shadow"
                type="text"
                placeholder="Nama Belakang"
                value={form.middleName}
                onChange={(e) => setForm({ ...form, middleName: e.target.value })}
              />
              <User className="absolute top-1/2 -translate-y-1/2 left-4 text-primary" weight="fill" />
            </div>
          </div>
          <div className="relative">
            <select
              className="p-4 pl-12 rounded-xl border border-primary/40 bg-lightgray w-full shadow appearance-none"
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
            >
              <option value="" disabled>
                Pilih Program
              </option>
              {programData.map((item) => (
                <option className="border" key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
            <AppWindow
              className="absolute top-1/2 -translate-y-1/2 left-4 text-primary pointer-events-none"
              weight="fill"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="relative">
              <input
                className="p-4 pl-12 rounded-xl border border-primary/40 bg-lightgray w-full shadow"
                type="text"
                placeholder="Whatsapp"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              />
              <WhatsappLogo className="absolute top-1/2 -translate-y-1/2 left-4 text-primary" weight="fill" />
            </div>
            <div className="relative">
              <input
                className="p-4 pl-12 rounded-xl border border-primary/40 bg-lightgray w-full shadow"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Envelope className="absolute top-1/2 -translate-y-1/2 left-4 text-primary" weight="fill" />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary/60 to-primary text-white font-medium"
            >
              Kirim Pendaftaran
            </button>
          </div>
        </form>
        <div>
          <Marquee>
            {logoData.map((item, i) => (
              <img key={i} className="mx-8 w-20 h-12 filter grayscale-[50%]" src={item.img} alt="" />
            ))}
          </Marquee>
        </div>
      </div>

      <div
        className="relative"
        style={{ backgroundImage: `url(${HERO})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
      >
        <div className="w-8 h-8 p-1 rounded-full bg-primary flex justify-center items-center text-white absolute top-16 right-0">
          <img src={LOGO} alt="" />
        </div>
        <div className="absolute bottom-8 right-0 bg-lightgray p-4 rounded-2xl flex justify-center items-center gap-x-4">
          <div className="flex items-center">
            <div
              className="w-14 h-20 bg-neutral rounded-xl"
              style={{ backgroundImage: `url(${PERSON_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div
              className="w-14 h-18 bg-neutral rounded-xl -ml-4"
              style={{ backgroundImage: `url(${PERSON_5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div
              className="w-14 h-20 bg-neutral rounded-xl -ml-4"
              style={{ backgroundImage: `url(${PROGRAM})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>
          <h1 className="text-6xl">
            50 <span className="text-primary">+</span>
          </h1>
          <div className="text-lightblack">
            <p>Lulusan</p>
            <p>Terbaik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
