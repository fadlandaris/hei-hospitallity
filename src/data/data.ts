import type { staticData } from "../type/type"
import { InstagramLogo, FacebookLogo, TiktokLogo, YoutubeLogo, GraduationCap, Handshake, Globe, Coffee, PaintBrushHousehold, Hamburger, StarFour } from "phosphor-react"
import { HERO } from "../assets/assets"

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
  },
  {
    id: 2,
    icon: FacebookLogo,
  },
  {
    id: 3,
    icon: TiktokLogo,
  },
  {
    id: 4,
    icon: YoutubeLogo,
  },
]


export const aboutData: staticData[] = [

  {
    id: 1,
    icon: GraduationCap,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vel. Sit quia voluptatum ",
    value: "100",
    subTitle: "+",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vel. Sit quia voluptatum ",
    value: "10",
    subTitle: "+",
  },
   {
    id: 3,
    icon: Globe,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vel. Sit quia voluptatum ",
    value: "10",
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
    img: HERO,
  },
   {
    id: 3,
    img: HERO,
  },
   {
    id: 4,
    img: HERO,
  },
   {
    id: 5,
    img: HERO,
  },
]

export const programData: staticData[] = [
  {
    id: 1,
    title: "Class of Barista Service",
    icon: Coffee,
    video : "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi eum tenetur iusto, ad qui similique sed? Error, iure quibusdam."
  },
   {
    id: 2,
    icon: PaintBrushHousehold,
    title: "Class of House Keeping Service",
    video : "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi eum tenetur iusto, ad qui similique sed? Error, iure quibusdam."
  },
   {
    id: 3,
    icon: Hamburger,
    title: " Class Food & Beverage Service",
    video : "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi eum tenetur iusto, ad qui similique sed? Error, iure quibusdam."
  },
]

export const testimonyData: staticData[] = [
  {
    id: 1,
    img: "",
    name: "David Julianto",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis voluptatum iusto magnam, asperiores suscipit dignissimos reiciendis sit sunt? Assumenda, accusamus! Tempora aspernatur quis deserunt sequi ab in veritatis aperiam.",
    icon : StarFour,
    subTitle: "Founder PT Best Creations",
  },
  {
    id: 2,
    img: "",
    name: "David Julianto",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis voluptatum iusto magnam, asperiores suscipit dignissimos reiciendis sit sunt? Assumenda, accusamus! Tempora aspernatur quis deserunt sequi ab in veritatis aperiam.",
    icon : StarFour,
    subTitle: "Founder PT Best Creations",
  },
  {
    id: 3,
    img: "",
    name: "David Julianto",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis voluptatum iusto magnam, asperiores suscipit dignissimos reiciendis sit sunt? Assumenda, accusamus! Tempora aspernatur quis deserunt sequi ab in veritatis aperiam.",
    icon : StarFour,
    subTitle: "Founder PT Best Creations",
  },
]
