import { useTranslation } from "react-i18next"

const About = () => {

  const { t } = useTranslation("global")

  return (
    <div id='aboutme' className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-5rem)] flex justify-center bg-[url('/assets/bg.jpg')] bg-cover">

      <div className='flex flex-col sm:flex-row gap-6 sm:gap-12 sm:my-0 my-12'>

        <div className='flex justify-center items-center'>
          <img src='/assets/profileimg.png' className='w-[10em] h-[10em] sm:w-[18em] sm:h-[18em] rounded-full' />
        </div>

        <div className='flex sm:w-[40rem] flex-col sm:justify-center gap-1 sm:gap-3 sm:text-start text-center'>

          <h1 className='font-semibold text-center sm:text-start  font-montserrat text-[1.75rem] sm:text-[3rem] mb-1 sm:mb-3 text-gray-800'>{t("about.title")}</h1>
          <p className='font-montserrat sm:text-[1.5rem] px-3 sm:px-0 text-[1rem] place-self-center self-center text-gray-800 leading-8'>
            {t("about.description")}
          </p>
          

          <div className='flex flex-row justify-center mt-6 sm:mt-4 sm:gap-6 gap-2'>

            <button className='sm:w-[7.25rem] relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/icons8-github.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>GitHub</span>
            </button>

            <button className='sm:w-[7.25rem] relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/107178_circle_linkedin_icon.svg' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>Linkedin</span>
            </button>

            <button className='sm:w-[7.25rem] relative flex overflow-hidden flex-row align-middle items-center justify-center rounded-full border border-slate-400 py-1.5 px-3 text-sm bg-slate-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-300 before:duration-500 before:ease-out hover:shadow-slate-300 hover:before:h-56 hover:before:w-56'>
              <img src='/assets/icons/icons8-resume-30.png' className='w-5 mr-1 z-10'/>
              <span className='z-10 text-gray-800'>{t("about.cv")}</span>
            </button>
          </div>
          
        </div>

      </div>


    </div>
  )
}

export default About