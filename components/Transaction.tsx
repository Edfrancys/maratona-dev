import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../utils/Firebase'
import { TranzactionData } from '../utils/interfaces/TranzactionsInterface';

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

const openModal = () => {
    document.querySelector('#modal')?.classList.add('modal-active')
}

const convertValor = (valor: any) => {

    const signal = Number(valor) < 0 ? '-' : ''

    valor = String(valor).replace(/\D/g, '')
    valor = Number(valor) / 100
    valor = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return `${signal}  ${valor}`
}

const Transaction = () => {

    const [tranzactions, setTranzactions] = useState<TranzactionData | any>([])

    useEffect(() => {
        db.collection('tranzactions')
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

                                    { value.amount > 0 ?
                                        <Income>{convertValor(value.amount)}</Income>
                                        : <Expense>{convertValor(value.amount)}</Expense>
                                    }

                                    <Data>{value.date}</Data>
                                    <td> Delete </td>
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