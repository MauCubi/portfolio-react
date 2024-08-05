
import { Controller, Path, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import FormInput from '../components/FormInput'
import Swal from 'sweetalert2'
import { useEffect, useRef, useState } from 'react';

export type FormData = {
    user_name: string
    user_email: string
    message: string
}

export type FieldPath<TFieldValues extends FormData> = Path<TFieldValues>

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const [inputDisabled, setinputDisabled] = useState<boolean>(false)
    
    const { control, handleSubmit, formState, formState: { errors, isSubmitSuccessful  }, reset } = useForm<FormData>({
        defaultValues: {
            user_name:'',
            user_email:'',
            message:''
        }
    })

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ user_name:'', user_email:'', message:'' })
        }
      }, [formState, isSubmitSuccessful, reset])

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    


    const onSubmit = () => {    
        
        setinputDisabled(true)

        emailjs
        .sendForm('service_0vca8ok', 'template_d7elrf9', form.current as HTMLFormElement, {
          publicKey: 'JK6nHO9XynFM1Ug1M',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            Toast.fire({
                icon: "success",
                title: "Mensaje enviado correctamente"
              })
            setinputDisabled(false)
          },
          (error) => {
            console.log('FAILED...', error.text);
            Toast.fire({
                icon: "error",
                title: "Mensaje no pudo ser enviado"
              });
            setinputDisabled(false)
          },
        );
    }
    

  return (
    <div id='contact_me' className='bg-[#dce7ff] w-full py-12'>

        <div className='flex justify-center'>
            <h1 className='my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800'>Contacto</h1>
        </div>

        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white py-10 md:py-12 px-4 md:px-6'>

                <form ref={form} onSubmit={handleSubmit(onSubmit)}>

                    <Controller
                        name='user_name'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='text' 
                                label='Nombre' 
                                placeholder='Ingrese su nombre aquí' 
                                fieldRef={field}
                                inputDisabled={inputDisabled}
                                hasError={errors.user_name?.type === 'required'} 
                            />
                        )}
                    />

                    <Controller
                        name='user_email'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='email' 
                                label='Email' 
                                placeholder='Ingrese su email aquí' 
                                fieldRef={field}
                                inputDisabled={inputDisabled}
                                hasError={errors.user_email?.type === 'required'} 
                            />
                        )}
                    />

                    <Controller
                        name='message'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='textarea' 
                                label='Mensaje' 
                                placeholder='Ingrese el mensaje aquí' 
                                fieldRef={field}
                                inputDisabled={inputDisabled}
                                hasError={errors.message?.type === 'required'} 
                            />
                        )}
                    />

                    {/* <button type='submit' className='w-full px-6 py-5 bg-slate-700 text-white font-medium uppercase rounded shadow-md hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:outline-none focus:ring-0 active:bg-slate-400' >Enviar</button> */}
                    <button disabled={inputDisabled} type='submit' className='contact-button' >Enviar</button>
                    
                </form>

            </div>
        </div>



    </div>
  )
}

export default Contact