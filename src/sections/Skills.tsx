
const Skills = () => {
  return (
    <div id='skills' className='flex py-12 flex-col bg-[#f8f8f8] justify-center'>

      <div className='flex justify-center'>
        <h1 className="my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800">Habilidades</h1>
      </div>
      
      <div className='grid lg:grid-cols-6 mt-4 sm:mt-12 sm:grid-cols-4 grid-cols-2 justify-center self-center gap-10 lg:w-[60%] sm:w-[80%]'>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/HTML5.svg" alt="HTML" className='w-[50px]' />
          <p className='skills-name'>HTML</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/CSS3.svg" alt="CSS" className='w-[50px]' />
          <p className='skills-name'>CSS</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/JavaScript.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>JavaScript</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/TypeScript.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>TypeScript</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/React.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>React.js</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/Tailwind CSS.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>Tailwind</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/Material UI.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>Material UI</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/Node.js.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>Node.js</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/Git.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>Git</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/MySQL.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>MySQL</p>
        </div>

        <div className='flex flex-col align-middle justify-center items-center'>
          <img src="/assets/skills/MongoDB.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>MongoDB</p>
        </div>
      </div>  
    </div>
  )
}

export default Skills