
import { Controller, Path, useForm } from 'react-hook-form'
import FormInput from '../components/FormInput'

export type FormData = {
    name: string
    email: string
    message: string
}

export type FieldPath<TFieldValues extends FormData> = Path<TFieldValues>

const Contact = () => {
    

    const { control, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            name:'',
            email:'',
            message:''
        }
    })
    

  return (
    <div className='bg-[#dce7ff] w-full py-12'>

        <div className='flex justify-center'>
            <h1 className='my-12 text-[44px] font-bold font-montserrat leading-none tracking-tight text-gray-800'>Contacto</h1>
        </div>

        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white py-10 md:py-12 px-4 md:px-6'>

                <form>

                    <Controller
                        name='name'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='text' 
                                label='Nombre' 
                                placeholder='Ingrese Nombre' 
                                fieldRef={field} hasError={errors.name?.type === 'required'} 
                            />
                        )}
                    />

                    <Controller
                        name='email'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormInput 
                                type='text' 
                                label='Email' 
                                placeholder='Ingrese Email' 
                                fieldRef={field} hasError={errors.name?.type === 'required'} 
                            />
                        )}
                    />
                    
                </form>

            </div>
        </div>



    </div>
  )
}

export default Contact