import { useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next"

const Header = () => {

  const [selectedLanguage, setSelectedLanguage] = useState({language: localStorage.getItem('language')||'Español', lng:localStorage.getItem('lng')||'es'})
  const [hiddenStatus, sethiddenStatus] = useState('hidden')
  const [t, i18n] = useTranslation("global")

  const toggleDropdown = () => {
    sethiddenStatus(hiddenStatus=='hidden'?'':'hidden')
  }

  const changeLanguage = (language: string, lng: string) => {
    setSelectedLanguage({language, lng})
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
    localStorage.setItem('language', language)
    sethiddenStatus('hidden')
  }


  return (
    <header className='sticky top-0 z-20 flex w-full opacity-95 bg-white  border-b-2  align-middle h-[5.62rem] items-center'>
        <nav className='flex flex-row py-4 px-10 justify-between w-full align-middle'>

            <div className='flex items-center'>
                <p className='font-semibold text-[1.2rem] leading-6 text-gray-900 cursor-default font-montserrat'>Mauro Cubilla.</p>
            </div>

            <div className='flex gap-8 items-center'>




                <a href='#' className='nav-links'>{t("header.about")}</a>
                <a href='#skills' className='nav-links'>{t("header.skills")}</a>
                <a href='#projects' className='nav-links'>{t("header.projects")}</a>
                <a href='#' className='nav-links'>{t("header.contact")}</a>

                <div className='relative flex '>
                <div 
                  onClick={() => toggleDropdown()}
                  className='flex bg-white border-solid border-gray-300 self-center cursor-pointer border-[1px] 
                  rounded-full align-middle select-none w-10 h-10 items-center justify-center'
                >
                  <span className={`fi fi-${selectedLanguage.lng}`}></span>
                </div>

                <div className={`flex flex-col rounded-xl border-gray-300 bg-white absolute top-[46px] right-0 max-sm:w-auto w-[130px] shadow ${hiddenStatus}`}>

                  <div 
                    className='language-dropdown'
                    onClick={() => changeLanguage('Español', 'es')}
                  >
                    <p className='text-[1rem] text-gray-900 font-montserrat'><span className="fi fi-es mr-2"/>Español</p>
                  </div>

                  <div 
                    className='language-dropdown'
                    onClick={() => changeLanguage('English', 'gb')}
                  >                  
                    <p className='text-[1rem] text-gray-900 font-montserrat'><span className="fi fi-gb mr-2"/>English</p>
                  </div>

                </div>              
              </div>

            </div>
        </nav>
    </header>
  )
}

export default Header