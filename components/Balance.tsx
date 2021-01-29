import styled from 'styled-components'
import { FaArrowAltCircleUp, FaArrowCircleDown, FaMoneyBillWave } from "react-icons/fa"

const Section = styled.section`
    margin-top: -7rem;
`
const Title = styled.h2`
    color: ${props => props.theme.colors.white};
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    font-weight: normal;    
`
const TitleCard = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
`
const ParagrafCard = styled.p`
    font-size: 2rem;
    line-height: 2.5rem;
    margin-top: 1rem;
`
const CardEntradas = styled.div`
    background: ${props => props.theme.background.white};
    padding: 1.5rem 2.1rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.background.green};
`
const CardSaidas = styled.div`
    background: ${props => props.theme.background.white};
    padding: 1.5rem 2.1rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
    color:#be1e53;
`
const CardGreen = styled(CardEntradas)`
    background: ${props => props.theme.background.green};
    color: ${props => props.theme.colors.white};
`

const ArrTransactionData = [
    {
        id: 1,
        description: 'Luz',
        amount: -50050,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Água',
        amount: -20050,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Website',
        amount: 100050,
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

const Incomes = () => {
    /* Somar as Entradas */
    let income = 0

    ArrTransactionData.map(valor => {
        valor.amount > 0 ? income = income + valor.amount : ''
    })

    return income
}

const Expenses = () => {
    /* Somar as Saídas */
    let expense = 0

    ArrTransactionData.map(valor => {
        valor.amount < 0 ? expense = expense + valor.amount : ''
    })

    return expense
}

const Total = () => {
    /* Entradas - Saídas */
    return Incomes() + Expenses()
}

const Balance = () => {
    return <>
        <div className='container'>
            <Section id='balance'>

                <Title className='sr-only' >Balanços</Title>

                <CardEntradas>
                    <TitleCard>
                        <span>Entradas</span>
                        <FaArrowAltCircleUp />
                    </TitleCard>
                    <ParagrafCard>{convertValor(Incomes())}</ParagrafCard>
                </CardEntradas>

                <CardSaidas>
                    <TitleCard>
                        <span>Saídas</span>
                        <FaArrowCircleDown />
                    </TitleCard>
                    <ParagrafCard>{convertValor(Expenses())}</ParagrafCard>
                </CardSaidas>

                <CardGreen>
                    <TitleCard>
                        <span>Saldo</span>
                        <FaMoneyBillWave />
                    </TitleCard>
                    <ParagrafCard>{convertValor(Total())}</ParagrafCard>
                </CardGreen>

            </Section>
        </div>

    </>
}

export default Balance