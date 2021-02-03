import LoginForm from '../components/Form/LoginForm'
import Layout from '../components/Layout';

const LoginPage: React.FC = () => {
    
    return(
        <Layout title='Login | Maratona - Finance.Note' >
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-200'>
                
                <div className='bg-gray-800 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12'>
                    <div className='flex-grow'>
                        <h1 className='text-white text-center text-3xl pb-5'>Faça seu Login!</h1>
                        <p className='text-lg text-center text-white'>Preencha com seus dados para acessar sua área resevada.</p>
                    </div>
                </div>
                <div className='lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:48'>
                    <div className="flex-grow bg-white shadow-md rounded-md border border-gray-300">
                        <LoginForm />
                    </div>
                </div>

            </div>
        </ Layout>
    )
}

export default LoginPage