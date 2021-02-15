import { useAuth } from '../../utils/context/AuthContext'
import { useForm } from 'react-hook-form'

import { FaGoogle } from 'react-icons/fa'

interface AuthUserData {
    email: string,
    password: string
}


const CadastroPage: React.FC = () => {

    const {register, errors, handleSubmit } = useForm({
       mode: 'onBlur'
    })  
    
   
    const { signUp, signInGoogle } = useAuth()

    const loginGoogle = () => {
        signInGoogle()
    }
        

    const onSubmitsignUp = (data: AuthUserData) => {
        signUp(data)        
    }

    return (
        <form onSubmit={handleSubmit(onSubmitsignUp)} className='justify-between pt-4 pb-6' >

            <div className='px-6 mb-3'>
                <label className='text-sm'>Email:</label>
                <input type="text" name='name' className='w-full border rounded-lg border-gray-400 px-3 py-2'
                    ref={register({
                        required: 'Preencha com seu e-mail.',
                        pattern: {
                            value: /\S+@\S+\.\S+/ ,
                            message: 'Coloque um e-mail válido.'
                        }
                    })} />
                {errors.email && (
                    <div>
                        {errors.email.message}
                    </div>
                )}
            </div>

            <div className='px-6 mb-3'>
                <label className='text-sm'>Email:</label>
                <input type="text" name='email' className='w-full border rounded-lg border-gray-400 px-3 py-2'
                    ref={register({
                        required: 'Preencha com seu e-mail.',
                        pattern: {
                            value: /\S+@\S+\.\S+/ ,
                            message: 'Coloque um e-mail válido.'
                        }
                    })} />
                {errors.email && (
                    <div>
                        {errors.email.message}
                    </div>
                )}
            </div>

            <div className='px-6 mb-5'>
                <label className='text-sm'>Password:</label>
                <input type="password" name='password' className='w-full border rounded-lg border-gray-400 px-3 py-2'
                    ref={register({
                        required: 'Senha é obrigatório.',
                        minLength: {
                            value: 6 ,
                            message: 'Senha deve conter no minimo 6 caracteres.'
                        }
                    })} />
                {errors.password && (
                    <div>
                        {errors.password.message}
                    </div>
                )}
            </div>
            <div className='px-6 mb-3'>
                <button type='submit' className='py-2 w-full rounded-lg border-2 font-bold text-blue-600 border-blue-600 hover:border-transparent hover:bg-blue-400 hover:text-white'>Cadastre-se</button>
            </div>
                
            <div className='px-6'>
                <button onClick={loginGoogle} className='flex items-center justify-center py-2 w-full rounded-lg border-2 font-bold text-white bg-blue-600 hover:border-blue-600 hover:bg-white hover:text-blue-600'>
                    <FaGoogle className='mr-4' />Login com Google
                </button>
            </div>            
        </form>
    )
}

export default CadastroPage