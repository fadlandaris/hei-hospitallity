import { galleryData } from "../../data/data"
import Title from "../Title"
const Gallery = () => {
  return (
    <main className="mt-16 md:mt-24 px-8 md:px-12 lg:px-20">
      <div className="">
        <Title title={"Our Gallery Programs"} subTitle={"And Photo Article"} mark={"gallery"} variant={"left"}/>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {galleryData.map((item, i) => {
            const delayTime = [
              '300',
              '600',
              '900'
            ]
            return (
              <div data-aos="fade-up" data-aos-delay={delayTime[item.id]} key={i}>
                <div className="h-[400px] rounded-4xl overflow-hidden">
                  <video controls className="w-full h-full object-cover object-center">
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Gallery