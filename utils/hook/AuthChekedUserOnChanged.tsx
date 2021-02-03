import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';


export const AuthChekedUserOnChanged = () => {

    const { load, user } = useAuth()
    const router = useRouter()


    if (load === false) {
        console.log(false)
    }
    else if (!user) {
        console.log(user)
        router.push('/login')
    }

    return true

}

const LoadingPageAuth: React.FC = () => {
    return <div className='h-screen flex justify-center items-center content-center'>
        <div className='block'>
            <h1>Loading Data ...</h1>
        </div>
    </div>
}

export default LoadingPageAuth