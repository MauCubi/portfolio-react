
const Header = () => {
  return (
    <header className='sticky top-0 z-20 flex w-full opacity-95 bg-white  border-b-2  align-middle h-[5.62rem] items-center'>
        <nav className='flex flex-row py-4 px-10 justify-between w-full align-middle'>
            <div className='flex'>
                <p className='font-semibold text-[1.2rem] leading-6 text-gray-900 cursor-default font-montserrat'>Mauro Cubilla.</p>
            </div>
            <div className='flex gap-8 '>
                <a href='#' className='nav-links'>Sobre Mí</a>
                <a href='#skills' className='nav-links'>Habilidades</a>
                <a href='#projects' className='nav-links'>Proyectos</a>
                <a href='#' className='nav-links'>Contacto</a>
            </div>
        </nav>
    </header>
  )
}

export default Header