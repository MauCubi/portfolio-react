
const About = () => {
  return (
    <div id='aboutme' className="h-[calc(100vh-5rem)] flex justify-center bg-[url('/assets/bg.jpg')] bg-cover">

      <div className='flex gap-12'>

        <div className='flex justify-center items-center'>
          <img src='/assets/profileimg.png' className='w-[18em] h-[18em] rounded-full' />
        </div>

        <div className='flex w-[40rem] flex-col justify-center gap-3'>

          <h1 className='font-semibold font-montserrat text-[3rem] mb-3 text-gray-800'>Hola, soy Mauro Cubilla</h1>
          <p className='font-montserrat text-[1.5rem] text-gray-800 leading-8'>
            Soy un desarrollador web argentino especializado en frontend con React pero también tengo conocimiento de diversas tecnologías backend.
          </p>
          

          <div className='flex flex-row justify-center mt-4 gap-6'>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/icons8-github.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>GitHub</span>
            </button>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/107178_circle_linkedin_icon.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>Linkedin</span>
            </button>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/icons8-resume-30.png' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>Curriculum</span>
            </button>
          </div>
          
        </div>

      </div>


    </div>
  )
}

export default About