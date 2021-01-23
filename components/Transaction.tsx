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
    color: #12a454;
`

const Linkhref = styled.a`
    color: ${props => props.theme.colors.primary};
    padding: .8rem 1.5rem;
    text-decoration: none;
    border: 1px solid #00c7a6;
    display: inline-block;
    margin: 2rem 0 1rem 0;

`


const Transaction = () => {
    return <>

        <section id='transaction'>
            <div className="container">

                <Title className='sr-only'>Transações</Title>

                <Linkhref href="#">+ Adicionar Tranzação</Linkhref>

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
                            <Theader>
                                <Description>Luz</Description>
                                <Expense>-R$80,00</Expense>
                                <Data>20/01/2020</Data>
                                <td>delete</td>
                            </Theader>
                            <Theader>
                                <Description>Aluguel</Description>
                                <Expense>-R$400,00</Expense>
                                <Data>20/01/2020</Data>
                                <td>delete</td>
                            </Theader>
                            <Theader>
                                <Description>Salário</Description>
                                <Income>R$1100,00</Income>
                                <Data>20/01/2020</Data>
                                <td>delete</td>
                            </Theader>
                        </tbody>
                    </Table>
                </DivTable>
            </div>
        </section>



    </>
}

export default Transaction