import styled from 'styled-components'

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

const ArrTransactionData = [
    {
        id: 1,
        description: 'Luz',
        amount: -8000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Água',
        amount: -4550,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Salário Photoshop',
        amount: 110000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'Feira Mês',
        amount: -19000,
        date: '23/01/2021'
    }]

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

                            {ArrTransactionData.map((value, idx) => (
                                <Theader key={idx} >
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