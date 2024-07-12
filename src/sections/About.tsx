
const About = () => {
  return (
    <div className="h-[100vh] flex justify-center bg-[url('/src/assets/bg.jpg')] bg-cover">

      <div className='flex gap-10'>

        <div className='flex justify-center items-center'>
          <img src='/assets/profileimg.png' className='w-[230px] h-[230px] rounded-full' />
        </div>

        <div className='flex w-[500px] flex-col justify-center gap-2'>

          <h5 className='font-semibold font-montserrat text-[32px] mb-3 text-gray-800'>Hola, soy Mauro Cubilla</h5>
          <p className='font-montserrat text-gray-800 leading-5'>
            Soy un desarrollador web de Argentina especializado en frontend con React pero cuento con conocimientos con varias tecnologias backend.
            <br />
            Soy un alumno avanzado en la carrera de analista de sistemas por lo que tambien tengo conocimientos del proceso de software como analisis y documentacion de requisitos                      
          </p>
          

          <div className='flex flex-row justify-center mt-4 gap-6'>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='../src/assets/icons/icons8-github.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>GitHub</span>
            </button>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/src/assets/icons/107178_circle_linkedin_icon.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>Linkedin</span>
            </button>

            <button className='relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/src/assets/icons/icons8-resume-30.png' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>Curriculum</span>
            </button>
          </div>
          
        </div>

      </div>


    </div>
  )
}

export default About