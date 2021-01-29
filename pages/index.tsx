import Layout from '../components/Layout'
import Balance from '../components/Balance'
import Transaction from '../components/Transaction'
import Modal from '../components/Modal'


export default function Home() {
    return (
        <>
            <Layout title='Home | Maratona - Finance.Note' >
                <Balance />
                <Transaction />
                <Modal />
            </Layout>
        </>
    )
}
