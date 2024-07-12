
const Skills = () => {
  return (
    <div id='skills' className='flex py-4 flex-col bg-[#fbfbfb] justify-center'>

      <div className='flex justify-center'>
        <h1 className="my-4 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800">Habilidades</h1>
      </div>
      
      <div className='flex mt-6 justify-center gap-12'>

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
          <img src="/assets/skills/Node.js.svg" alt="JavaScript" className='w-[50px]' />
          <p className='skills-name'>Node.js</p>
        </div>




      </div>      
    </div>
  )
}

export default Skills