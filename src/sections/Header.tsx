
const Header = () => {
  return (
    <header className='bg-white fixed flex w-full border-b-2  align-middle h-[65px] items-center'>
        <nav className='flex flex-row py-4 px-10 justify-between w-full align-middle'>
            <div className='flex'>
                <p className='font-semibold leading-6 text-gray-900 cursor-default font-montserrat'>Mauro Cubilla.</p>
            </div>
            <div className='flex gap-4 '>
                <a href='#' className='nav-links'>Sobre Mí</a>
                <a href='#skills' className='nav-links'>Habilidades</a>
                <a href='#' className='nav-links'>Projectos</a>
                <a href='#' className='nav-links'>Contacto</a>
            </div>
        </nav>
    </header>
  )
}

export default Header