import { useState, useRef, useEffect } from 'react';
import { experienceData } from "../../data/data";
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { programData } from "../../data/data";
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); 
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <main id="programs" className="px-8 md:px-12 lg:px-20 mt-16 lg:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
        <div data-aos="fade-right"  data-aos-easing="ease-in-sine">
          <Swiper
            className="rounded-3xl"
            speed={1000}
            spaceBetween={24}
            slidesPerView={1}
            loop
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {programData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-full">
                  <div
                    className="w-full h-[500px] bg-neutral-300 rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-left" data-aos-easing="ease-in-sine" className="flex items-center">
          <div className="w-full">
            <Title title="Programs We Have" subTitle="For Our Students" mark="Programs" variant="left" />
            <p className={`mt-6 leading-7 transition-all duration-500 ease-in-out ${animate ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {programData[activeIndex].desc}
            </p>
            <div className="grid grid-cols-2 mt-6 gap-x-6">
              <div className={`transition-all duration-500 ease-in-out ${animate ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <h1 className="text-xl font-bold">{programData[activeIndex].title}</h1>
                <p className="mt-2">{programData[activeIndex].subdesc}</p>
              </div>
              <div className={`transition-all duration-500 ease-in-out ${animate ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <h1 className="text-xl font-bold">Fokus Pembelajaran</h1>
                <p className="mt-2">{programData[activeIndex].focus}</p>
              </div>
            </div>
            <div className="mt-12 flex items-center gap-x-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="hover:scale-110 transition-all duration-500 cursor-pointer text-lg p-4 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/20 text-primary"
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="hover:scale-110 transition-all duration-500 cursor-pointer text-lg p-4 rounded-full bg-gradient-to-tr from-primary to-secondary text-white"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-12 xl:my-24 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 h-[1px] w-full" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 lg:grid-cols-4">
        {experienceData.map((item, i) => {
          const delayTime = [
              '300',
              '600',
              '900',
              '1200',
            ]
          return (
            <div data-aos="fade-up" data-aos-delay={delayTime[item.id]} key={i} className="items-center flex justify-between">
            <div className="w-full text-center">
              <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary">
                {item.title}
              </h1>
              <p className="mt-6">{item.desc}</p>
            </div>
            <div className={`${i === experienceData.length - 1 ? "hidden" : "flex"} w-[1px] h-12 bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-100`} />
          </div>
          )
        })}
      </div>
    </main>
  );
};

export default Programs;
