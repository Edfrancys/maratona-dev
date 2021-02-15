import CadastroForm from '../components/Form/CadastroForm'
import Layout from '../components/Layout';

import { useAuth } from '../utils/context/AuthContext'
import { useRouter } from 'next/router'

const LoginPage: React.FC = () => {
    
    const { user } = useAuth()

    const router = useRouter()

    if (user) {
        router.push('/index')
    }
    
    return(
        <Layout title='Login | Maratona - Finance.Note' >
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-200'>
                
                <div className='bg-gray-800 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12'>
                    <div className='flex-grow'>
                        <h1 className='text-white text-center text-3xl pb-5'>Faça seu Cadastro!</h1>
                        <p className='text-lg text-center text-white'>Preencha com seus dados para realizar seu cadastro.</p>
                    </div>
                </div>
                <div className='lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:48'>
                    <div className="flex-grow bg-white shadow-md rounded-md border border-gray-300">
                        <CadastroForm />
                    </div>
                </div>

            </div>
        </ Layout>
    )
}

export default LoginPage