import  { useState } from 'react';
import { programData } from '../data/data';
import { CheckCircle } from 'phosphor-react';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(programData[0]);

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program);
  };

  return (
    <main className='px-16 mt-24'>
      <div className=''>
        <div className='px-4 py-2 border inline-block rounded-full text-primary shadow font-medium'>
          Our Programs
        </div>
        <h1 className='text-4xl font-medium mt-8'>We Provide <span className='italic text-primary'>end-to-end Programs</span> <br /> and ensure the success of our student</h1>
        <div className='mt-8 border rounded-full grid grid-cols-3 p-2 border-primary/30  gap-x-4'>
          {programData.map((item, i) => {
            return (
              <button key={i} onClick={() => handleProgramClick(item)} className={`flex justify-center-safe items-center py-4 rounded-full gap-x-2 cursor-pointer ${selectedProgram.id === item.id ? 'bg-gradient-to-r from-primary/70 to-primary text-white' : 'bg-primary/5 text-primary'}`}>
                <div className='text-lg'>
                  <item.icon weight={`${selectedProgram.id === item.id ? 'fill' : 'bold'}`} />
                </div>
                <p className='font-medium'>{item.title}</p>
              </button>
            );
          })}
        </div>
        <div className='mt-8 h-96 grid grid-cols-3 gap-x-16'>
          <div className='rounded-xl bg-neutral-200'>
            {/* foto  */}
          </div>
         <div className='col-span-2 flex flex-col justify-center items-center'>
          <div className='w-full'>
            <h2 className='text-3xl font-medium'>{selectedProgram.title}</h2>
            <p className='mt-4  text-text'>{selectedProgram.desc}</p>
            <div className='grid grid-cols-1 gap-y-2 mt-8'>
              {selectedProgram.value.map((item : {subTitle: string}, i : any) => {
                return (
                  <div key={i} className='flex gap-x-2 items-center text-text'>
                    <div className='text-lg text-primary'>
                      <CheckCircle weight='fill'/>
                    </div>
                    <p>{item.subTitle}</p>
                  </div>
                )
              })}
            </div>
            <button className='py-4 px-8 mt-12 rounded-xl font-semibold bg-gradient-to-r from-primary/80 to-primary text-white text-sm shadow-sm'>
              Daftar Sekarang
            </button>
          </div>
         </div>
        </div>
      </div>
    </main>
  );
};

export default Programs;
