import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '../utils/context/AuthContext';
import { db } from '../utils/Firebase'
import { TranzactionData } from '../utils/interfaces/TranzactionsInterface';
import { FaMinusCircle } from 'react-icons/fa'

const DivTable = styled.div`
    display: block;
    width: 100%;
    overflow-x: auto;
`
const Title = styled.h2`
    color: ${props => props.theme.colors.dark};
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    font-weight: normal;    
`
const Table = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;    
`
const Theader = styled.tr`
    background: ${props => props.theme.background.white};    
    text-align: left;
    font-weight: 400;
`
const Description = styled.td`
    color: ${props => props.theme.background.dark};
`
const Income = styled.td`
    color: #12a454;
`
const Expense = styled.td`
    color: #be1e53;
`
const Data = styled.td`
    color: #353535;
`
const Linkhref = styled.a`
    color: ${props => props.theme.colors.primary};
    padding: .8rem 1.5rem;
    text-decoration: none;
    border: 1px solid #00c7a6;
    display: inline-block;
    margin: 2rem 0 1rem 0;
    cursor: pointer;
`
const LinkDelete = styled.a`
    width: 32px;
    color: #c91818;
    display: flex;
    justify-content: center;
    border-radius: 3rem;
    padding: 0.3rem;
`

const openModal = () => {
    document.querySelector('#modal')?.classList.add('modal-active')
}

const convertValor = (valor: any, tipo: any) => {

    const signal = tipo === 'saida' ? '-' : ''

    valor = String(valor).replace(/\D/g, '')
    valor = Number(valor) / 100
    valor = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return `${signal}  ${valor}`
}

const deleteTranzaction = (ref:  TranzactionData) => {
    db.collection('tranzactions').doc(ref.id).delete()
}

const Transaction = () => {

    const { user } = useAuth()

    const [tranzactions, setTranzactions] = useState<TranzactionData | any>([])

    useEffect(() => {
        db.collection('tranzactions').where('uid', '==', user.uid)
            .onSnapshot(snap => {
                const tranzactions: any = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTranzactions(tranzactions)
            })
    }, [])  

    return <>
        <section id='transaction'>
            <div className="container">

                <Title className='sr-only'>Transações</Title>

                <Linkhref onClick={openModal} >+ Adicionar Tranzação</Linkhref>

                <DivTable>
                    <Table>
                        <thead>
                            <Theader>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th></th>
                            </Theader>
                        </thead>
                        <tbody>

                            {tranzactions.map((value: TranzactionData): any => (
                                <Theader key={value.id} >
                                    <Description>{value.description}</Description>

                                    { value.tipo === 'entrada' ?
                                        <Income>{convertValor(value.amount, value.tipo)}</Income>
                                        : <Expense>{convertValor(value.amount, value.tipo)}</Expense>
                                    }

                                    <Data>{value.date}</Data>
                                    <td>
                                    <LinkDelete className='btn' onClick={ () => { deleteTranzaction(value) } } > <FaMinusCircle /> </LinkDelete>
                                    </td>
                                </Theader>
                            ))}

                        </tbody>
                    </Table>
                </DivTable>
            </div>
        </section>
    </>
}

export default Transaction