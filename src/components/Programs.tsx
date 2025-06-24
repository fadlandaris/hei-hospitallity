import { useState, useRef } from "react";
import { programData } from "../data/data";
import { Play, X } from "phosphor-react";
import { PROGRAM } from "../assets/assets";

const Programs = () => {
  const [showVideo, setShowVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const toggleVideo = (id: number) => {
    if (showVideo === id) {
      if (videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
      setShowVideo(null);
    } else {
      setShowVideo(id);
    }
  };

  return (
    <main className="mt-20 px-16">
      <div className="">
        <div className="flex items-start justify-between group">
          <div>
            <h1 className="text-5xl leading-14 flex items-center gap-x-4">
              Stay Happy
              <div className="w-24 h-12 bg-gradient-to-b from-secondary/50 to-secondary rounded-2xl relative group-hover:scale-x-[-1] transition-all duration-500">
                <img src={PROGRAM} className="absolute bottom-0 right-1/2 translate-x-1/2 w-24 h-20" />
              </div>
              With
            </h1>
            <h1 className="text-5xl leading-14">Our Selected Programs</h1>
          </div>
          <p className="text-text w-1/3">HEI adalah Lembaga Pendidikan Pelatihan dan Keterampilan (LPK/LKP) yang mengajarkan program / pendidikan Hospitality secara ringkas yang baik dan berkualitas tanpa biaya besar dengan peluang karir yang menjanjikan di dunia perhotelan</p>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-y-4">
          {programData.map((item, i) => {
            return (
              <div key={item.id} className={`${i === programData.length - 1 ? "border-b" : ""} group hover:py-20 transition-all duration-500 cursor-pointer border-t py-16 border-text/20 grid grid-cols-2`}>
                <div className="">
                  <h1 className="text-3xl font-medium w-1/2">{item.title}</h1>
                </div>
                <div className="flex justify-between">
                  <p className="w-[70%] text-lightblack">{item.desc}</p>
                  <button onClick={() => toggleVideo(item.id)} className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-b from-primary/50 to-primary text-white text-sm group-hover:scale-x-[-1] transition-all duration-500 z-10">
                    {showVideo === item.id ? <X size={15} weight="bold" /> : <Play weight="fill" />}
                  </button>
                </div>
                <div className={`mt-16 col-span-2 transition-all duration-700 ease-in-out ${showVideo === item.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  <div className="h-[80vh] overflow-hidden rounded-3xl">
                    <video
                      ref={(ref) => {
                        videoRefs.current[item.id] = ref;
                      }}
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Programs;
