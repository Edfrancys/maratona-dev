import Layout from '../components/Layout'
import Balance from '../components/Balance'
import Transaction from '../components/Transaction'
import Modal from '../components/Modal'

import { useAuth } from '../utils/context/AuthContext';
import { AuthChekedUserOnChanged } from '../utils/hook/AuthChekedUserOnChanged'


export default function Home() {

    AuthChekedUserOnChanged()

    const { user } = useAuth()

    if (!user) {

        return <div>
            <h2>Aguardando Login...</h2>
        </div>
    }

    return (
        <>
            <Layout title='Home | Maratona - Finance.Note' >
                <Balance />
                <Transaction />
                {user && (
                    <>
                        <p>Nome: { user.name }</p>
                        <p>Email: { user.email }</p>
                    </>
                )}
                <Modal />
            </Layout>
        </>
    )
}
