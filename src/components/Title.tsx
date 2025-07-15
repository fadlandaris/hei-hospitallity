import { CaretRightIcon } from "@phosphor-icons/react"

const Title = ({title, subTitle, mark, variant } : {title: string, subTitle: string, mark: string, variant:string}) => {
  return (
    <>
    <div data-aos="fade-up" className={`${variant === "left" ? "flex items-center" : "flex justify-center items-center"} `}>
      <div className={`capitalize px-4 py-1 rounded-full inline-block ${variant === 'left' ? "bg-gradient-to-tr from-primary/30 to-secondary/20" : "bg-gradient-to-tr from-primary to-secondary text-white"} font-medium`}>
        {mark}
      </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="300" className={`${variant === 'left' ? "" : 'justify-center'} flex mt-6 items-center gap-x-1 text-3xl md:text-4xl xl:text-5xl font-bold`}>
      <div className="text-primary">
        <CaretRightIcon weight="fill"/>
      </div>
      <h1 className={`${variant === "left" ? "" : "bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3"} capitalize`}>{title}</h1>
    </div>
    <h1 data-aos="fade-up" data-aos-delay="600" className={`text-3xl md:text-4xl xl:text-5xl font-bold ${variant === 'left' ? '' : 'text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 pb-3'}  capitalize`}>{subTitle}</h1>
    </>
  )
}

export default Title