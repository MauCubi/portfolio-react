import { projects } from '../db/projects'
import { useTranslation } from "react-i18next"

const Projects = () => {

  const { t } = useTranslation("global")

  return (
    <div id='projects' className='flex py-12 flex-col place-self-center bg-[#ffffff]  justify-center w-[90%] mx-auto'>

      <div className='flex justify-center'>
        <h1 className="my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800">
          {t("header.projects")}
        </h1>
      </div>

      <div>

        {
          projects.map( (project, index) => (
            <div key={project.id} className='grid grid-cols-1 sm:grid-cols-2 w-full py-10 sm:mb-10'>     

              <div className='flex justify-center sm:mb-0 mb-5'>
                <img src={project.img} className='sm:w-full w-[95%] rounded-xl drop-shadow shadow-xl '/>
              </div>     

              <div className='flex flex-col sm:px-12 items-center gap-2 justify-center sm:text-start text-center'>

                <h1 className='font-semibold font-montserrat text-[1.6rem] sm:text-[2rem] text-gray-800'>
                  {t(`projects.${index}.title`)}
                </h1>

                <p className='font-montserrat text-[1.1rem] text-gray-800 leading-6'>
                  {t(`projects.${index}.description`)}
                </p>

                <div className='flex flex-row gap-3 my-3'>
                  {
                    project.technologies.map( tech => (
                      <img className='w-6' src={`/assets/skills/${tech}.svg`} alt={tech} />
                    ))
                  }
                </div>

                <div>
                <a href={project.demo} target='_blank'>
                  <button type="button" className="project-buttons">
                    Demo
                  </button>
                </a>
                <a href={project.github} target='_blank'>
                  <button type="button" className="project-buttons">
                    Código
                  </button> 
                </a>
                
                </div>
              </div>  
            </div>
          ))
        }



      </div>



    </div>
  )
}

export default Projects