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
                <div className="flex flex-wrap items-center gap-2 mt-1">
                {
                  project.status === 'En Desarrollo'                  
                  ?
                  <p className='px-2 text-sm font-medium text-violet-600 bg-violet-100 rounded-full p-2'>🛠 {t(`projects.${index}.status`)}</p>                  
                  :''
                }
                  <p className='px-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full p-2'>{project.language}</p>
                </div>

                <p className='font-montserrat text-left text-[1.1rem] text-gray-800 leading-6'>
                  {t(`projects.${index}.description`)}
                </p>

                {
                  project.highlights
                  &&
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm py-6 text-start text-gray-700">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-500 mt-1">•</span>
                        <span>{t(`projects.${index}.highlights.${i}`)}</span>
                      </li>
                    ))}
                  </ul>                  
                }


                <div className='flex flex-row gap-3 my-3'>
                  {
                    project.technologies.map( tech => (
                      <img className='w-6' src={`/assets/skills/${tech}.svg`} alt={tech} />
                    ))
                  }
                </div>

                {
                  project.roadmap
                  &&
                  <p className="mt-4 text-xs text-gray-500 mb-2">
                    <span className="font-medium">Roadmap:</span>{" "}
                    { project.roadmap }
                  </p>
                }

                <div>
                <a href={project.demo} target='_blank'>
                  <button type="button" className="project-buttons">
                    Demo
                  </button>
                </a>
                <a href={project.github} target='_blank'>
                  <button type="button" className="project-buttons">
                    {t("project-buttons.code")}
                  </button> 
                </a>
                
                </div>
              </div>  
            </div>
          ))
        }



      </div>

      <a
        href="https://github.com/MauCubi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-gray-800 text-center mt-10 block hover:text-gray-400 transition-colors"
      >
        {t("project-github.note")}
      </a>



    </div>
  )
}

export default Projects