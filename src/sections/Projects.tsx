

const Projects = () => {
  return (
    <div id='projects' className='flex py-12 flex-col place-self-center bg-[#ffffff] justify-center w-[90%]'>

      <div className='flex justify-center'>
        <h1 className="my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800">
          Proyectos
        </h1>
      </div>

      <div>
        <div className='grid grid-cols-2 w-full py-10'>     

          <div>
            <img src='/assets/projects/rece1.png' className='w-full'/>
          </div>     

          <div className='flex flex-col p-12 items-center gap-2'>
            <h1 className='font-semibold font-montserrat text-[2rem] text-gray-800'>Red Social de Recetas</h1>
            <p className='font-montserrat text-[1rem] text-gray-800 leading-6'>Descripcion de todo el proyecto, asi tipo re loco viste tiene que ser bastantelargo y bien descriptivo, 
              asi parece todo re cheto y sin dejar espacios en blanco, 
              aca ya no se que mas escribir
            </p>
            <p>Aca van las tecnologias</p>

            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>

          </div>
          

        </div>

        {/* <div className='h-[500px] bg-red-300'>
          <img src={`${projects[0].img[1]}`} />
        </div> */}

        <div className='h-[500px] bg-blue-200'>
          PROJECTO EJEMPLO
        </div>


      </div>



    </div>
  )
}

export default Projects