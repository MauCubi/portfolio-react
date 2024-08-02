
import { Controller, Path, useForm } from 'react-hook-form'
import FormInput from '../components/FormInput'

export type FormData = {
    name: string
    email: string
    message: string
}

export type FieldPath<TFieldValues extends FormData> = Path<TFieldValues>

const Contact = () => {
    

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            name:'',
            email:'',
            message:''
        }
    })

    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    

  return (
    <div className='bg-[#dce7ff] w-full py-12'>

        <div className='flex justify-center'>
            <h1 className='my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800'>Contacto</h1>
        </div>

        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white py-10 md:py-12 px-4 md:px-6'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Controller
                        name='name'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='text' 
                                label='Nombre' 
                                placeholder='Ingrese su nombre aquí' 
                                fieldRef={field} 
                                hasError={errors.name?.type === 'required'} 
                            />
                        )}
                    />

                    <Controller
                        name='email'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='email' 
                                label='Email' 
                                placeholder='Ingrese su email aquí' 
                                fieldRef={field} 
                                hasError={errors.email?.type === 'required'} 
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
                                hasError={errors.message?.type === 'required'} 
                            />
                        )}
                    />

                    {/* <button type='submit' className='w-full px-6 py-5 bg-slate-700 text-white font-medium uppercase rounded shadow-md hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:outline-none focus:ring-0 active:bg-slate-400' >Enviar</button> */}
                    <button type='submit' className='contact-button' >Enviar</button>
                    
                </form>

            </div>
        </div>



    </div>
  )
}

export default Contact