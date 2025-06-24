import type { staticData } from "../type/type"
import { InstagramLogo, FacebookLogo, TiktokLogo, YoutubeLogo, GraduationCap, Handshake, Globe, Coffee, PaintBrushHousehold, Hamburger, StarFour } from "phosphor-react"
import { ABOUT_1, BARISTA_VIDEO, HERO, INTERNATIONAL_VIDEO, LOCAL_VIDEO, PERSON_4, PERSON_5, PROGRAM, TESTIMONY_AGUNG, TESTIMONY_RIZKI, TESTIMONY_SULTAN } from "../assets/assets"

export const navLinks: staticData[] = [
  {
    id: 1,
    nav: "Home",
    link: "/home",
  },
  {
    id: 1,
    nav: "About",
    link: "/home",
  },
  {
    id: 1,
    nav: "Services",
    link: "/home",
  },
  {
    id: 1,
    nav: "Testimony",
    link: "/home",
  },
]

export const socialMediaData: staticData[] = [
  {
    id: 1,
    icon: InstagramLogo,
    link: "https://www.instagram.com/hei.hospitality?igsh=am95bW1xcGo2anNu"
  },
  {
    id: 2,
    icon: FacebookLogo,
    link: "https://www.facebook.com/share/14F7RNxiWzK/"
  },
  {
    id: 3,
    icon: TiktokLogo,
    link: "https://www.tiktok.com/@hei.hospitality?_t=ZS-8xTYliYB5OL&_r=1"
  },

]


export const aboutData: staticData[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Sistem pendidikan dikemas untuk mendidik siswa / siswi sedemikian rupa sehingga menghasilkan 50+ lulusan yang kompeten",
    value: "50",
    subTitle: "+",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Kerja sama industri yang kami jalankan kurang lebih setidaknya terdapat 10 kerjasama dengan industri terkait ",
    value: "10",
    subTitle: "+",
  },
   {
    id: 3,
    icon: Globe,
    title: "Sudah 5 tahun Sejak pendirian HEI yang sudah terkenal menghasilkan lulusan yang berkompeten di bidang hospitality ",
    value: "5",
    subTitle: "Thn",
  },
]

export const whyUsData: staticData[] = [
  {
    id: 1,
    title: "Infrastruktur Valid",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
  },
   {
    id: 2,
    title: "Kuliah Untung",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
  },
   {
    id: 3,
    title: "Penempatan Kerja",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
  },
   {
    id: 4,
    title: "Kuliah Cepat Kerja",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
  },
]

export const marqueeData: staticData[] = [
  {
    id: 1,
    img: HERO,
  },
   {
    id: 2,
    img: ABOUT_1,
  },
   {
    id: 3,
    img: PROGRAM,
  },
   {
    id: 4,
    img: PERSON_4,
  },
   {
    id: 5,
    img: PERSON_5,
  },
]

export const programData: staticData[] = [
  {
    id: 1,
    title: "Hotel Exclusive (International)",
    icon: Coffee,
    video : INTERNATIONAL_VIDEO,
    desc: "Proses pembelajaran interaktif pendidikan teori & praktek selama 3 Bulan on the job training 6 bulan di Malaysia, Singapore, Turki. Full praktek english service, sertifikat pendidikan setara diploma, dan Mess selama pendidikan"
  },
   {
    id: 2,
    icon: PaintBrushHousehold,
    title: "Hotel Intensive (Local)",
    video : LOCAL_VIDEO,
    desc: "Proses pembelajaran interaktif pendidikan teori & praktek selama 3 Bulan on the job training 6 bulan di Hotel bintang 4 dan 5 di indonesia. Full praktek english service, sertifikat pendidikan setara diploma, dan Mess selama pendidikan"
  },
   {
    id: 3,
    icon: Hamburger,
    title: "Hotel Executive Cruise Ship",
    video : INTERNATIONAL_VIDEO,
    desc: "Proses pembelajaran interaktif pendidikan teori & praktek selama 2 Bulan dan memiliki pengalaman hotel minimal 6 bulan. Full praktek english for interview & hotel dibantu disalurkan ke agen kapal pesiar dan Mess selama pendidikan"
  },
   {
    id: 4,
    icon: Hamburger,
    title: "Barista Specialist",
    video : BARISTA_VIDEO,
    desc: "Proses pembelajaran interaktif pendidikan teori & praktek selama 1 Bulan. Full praktek english for interview & hotel, sertifikat pelatihan, dan Mess selama pendidikan"
  },
]

export const testimonyData: staticData[] = [
  {
    id: 1,
    img: TESTIMONY_AGUNG,
    name: "Agung",
    desc: "ALHAMDULILLAH di berikan kelancaran semuanya setelah bergabung dengan HEI. Mimpiku untuk berkarir di luar negeri akhirnya terwujud. Thank you very much HEI - dan TJL cabang Subang",
    icon : StarFour,
    subTitle: "HK Attendant - Princess Cruise Lines",
  },
  {
    id: 2,
    img: TESTIMONY_SULTAN,
    name: "Sultan Ahmad R",
    desc: "Proses tak pernah mengkhianati hasil dan semua perjuangan ku berbuah manis. Bisa bekerja di salah satu perusahaan Cruise Line terbesar di Dunia dan keliling dunia. Terimakasih HEI - Hospitallity Education Institute SUBANG ",
    icon : StarFour,
    subTitle: "HK Attendant - Norwegian CL ",
  },
  {
    id: 3,
    img: TESTIMONY_RIZKI,
    name: "Rizki Saputra",
    desc: "Hei.. kalian anak-anak muda ayo mari jangan buang waktu kalian dirumah. langkahkan kaki kalian dan berjuang untuk masa depan. Pokoknya kalian tidak akan menyesal deh bergabung dengan HEI, saya buktinya HEI The hospitality champions",
    icon : StarFour,
    subTitle: "Waiter - Middle East",
  },
]
