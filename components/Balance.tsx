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
const Card = styled.div`
    background: ${props => props.theme.background.white};
    padding: 1.5rem 2.1rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
`
const CardGreen = styled(Card)`
    background: ${props => props.theme.background.green};
    color: ${props => props.theme.colors.white};
`

const Balance = () => {
    return <>
        <div className='container'>
            <Section id='balance'>

                <Title className='sr-only' >Balanços</Title>

                <Card>
                    <TitleCard>
                        <span>Entradas</span>
                        <FaArrowAltCircleUp />
                    </TitleCard>
                    <ParagrafCard>R$ 5.000,00</ParagrafCard>
                </Card>

                <Card>
                    <TitleCard>
                        <span>Saídas</span>
                        <FaArrowCircleDown />
                    </TitleCard>
                    <ParagrafCard>R$ 5.000,00</ParagrafCard>
                </Card>

                <CardGreen>
                    <TitleCard>
                        <span>Saldo</span>
                        <FaMoneyBillWave />
                    </TitleCard>
                    <ParagrafCard>R$ 5.000,00</ParagrafCard>
                </CardGreen>

            </Section>
        </div>

    </>
}

export default Balance