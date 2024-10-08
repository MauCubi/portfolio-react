import { ControllerRenderProps } from 'react-hook-form'
import '../index.css'
import { FormData } from '../sections/Contact'
import { useTranslation } from "react-i18next"


interface Props {
    type: string,
    label: string,
    placeholder: string,
    fieldRef: ControllerRenderProps<FormData, "user_name"> | ControllerRenderProps<FormData, "user_email"> | ControllerRenderProps<FormData, "message">,
    hasError: boolean  
    inputDisabled: boolean
}

const FormInput = ({type, label, placeholder, fieldRef, hasError, inputDisabled}: Props) => {

    const inputStyle = 'form-control w-full px-3 py-1.5 text-gray-700 rounded border border-solid border-slate-300 focus:border-slate-800 focus:outline-none resize-none'
    const { t } = useTranslation("global")

  return (
    <div className='form-group mb-6'>
        <label className='block text-slate-800 text-sm font-bold mb-2 font-montserrat'>{label}</label>
        {type === 'textarea' ? (
            <textarea disabled={inputDisabled} className={inputStyle} rows={8} placeholder={placeholder} {...fieldRef} />
        ) : (
            <input disabled={inputDisabled} className={inputStyle} type={type} placeholder={placeholder} {...fieldRef} />
        )}
        {hasError && <p className='text-red-500 text-xs italic'>{`${label} `}{t("contact.required")}</p>}

    </div>
  )
}

export default FormInput