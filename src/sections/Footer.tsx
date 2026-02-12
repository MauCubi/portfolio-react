
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className='flex w-full h-[100px] bg-gray-900 p-8 justify-center align-middle flex-shrink-0'>
        <div className="flex flex-col justify-center align-middle gap-2">            
            <p  className='text-white text-xl'> &copy; Mauro Rogelio Cubilla - { year } </p>
        </div>    
    </div>
  )
}

export default Footer