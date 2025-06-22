import type { staticData } from "../type/type"
import { HouseSimple, DotsSix, Buildings, Coffee, PaintBrushHousehold, Hamburger } from "phosphor-react"

export const navLinks: staticData[] = [
  {
    id: 1,
    nav: "Home",
    link: "/home",
  },
  {
    id: 1,
    nav: "Home",
    link: "/home",
  },
  {
    id: 1,
    nav: "Home",
    link: "/home",
  },
  {
    id: 1,
    nav: "Home",
    link: "/home",
  },
]

export const sideLinks: staticData[] = [
  {
    id: 1,
    icon: DotsSix,
  },
   {
    id: 2,
    icon: Buildings,
  },
   {
    id: 3,
    icon: HouseSimple,
  },
   {
    id: 4,
    icon: HouseSimple,
  },
]

export const aboutData: staticData[] = [
   {
    id: 3,
    title: "Pendirian",
    value: "10",
    subTitle: "Thn",
  },
  {
    id: 1,
    title: "Lulusan",
    value: "100",
    subTitle: "+",
  },
   {
    id: 2,
    title: "Partners",
    value: "10",
    subTitle: "+",
  },
]

export const programData: staticData[] = [
   {
    id: 1,
    icon: Coffee,
    title: "Class of Barista",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, vitae ex. Ducimus nulla quod corporis ullam dolores natus sed perferendis voluptatum qui perspiciatis. Quidem, voluptates? ",
    value: [
      {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
    ]
  },
   {
    id: 2,
    icon: PaintBrushHousehold,
    title: "Class of Housekeeping",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, vitae ex. Ducimus nulla quod corporis ullam dolores natus sed perferendis voluptatum qui perspiciatis. Quidem, voluptates? ",
     value: [
      {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
    ]
  },
   {
    id: 3,
    icon: Hamburger,
    title: "Food & Beverage Services",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, vitae ex. Ducimus nulla quod corporis ullam dolores natus sed perferendis voluptatum qui perspiciatis. Quidem, voluptates? ",
     value: [
      {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
       {
        id: 1,
        subTitle: "Lorem ipsum dolor sit amet consectetur",
      },
    ]
  },
]