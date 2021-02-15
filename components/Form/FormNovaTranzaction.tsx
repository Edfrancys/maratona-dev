import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { useAuth } from '../../utils/context/AuthContext';
import { db } from '../../utils/Firebase';
import { TranzactionData } from '../../utils/interfaces/TranzactionsInterface'


const FormTranzaction = styled.form`
    max-width: 500px;
`

const TitleForm = styled.h1`
    margin-top: 0;
    color: #00804a;
`

const FormGroup = styled.div`
    margin-top: 0.8rem;
`

const FormGroupRadio = styled.div`
    margin-top: 0.8rem;   
    display: grid;
    grid-template-columns: repeat(2, 100px);
    gap: 1.5rem; 
`

const LabelRadio = styled.label`
    display: grid;
    grid-template-columns: 10px 100px;
    gap: 1.5rem;
`

const Tipografy = styled.p`
`
const FormGroupActions = styled.div`
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FormRadio = styled.input`
    border: none;       
    background: #dcdcdc;
`

const FormInput = styled.input`
    border: none;
    border-radius: .2rem;
    padding: 0.6rem;
    width: 100%;
    background: #dcdcdc;
`

const ButtonSubmit = styled.button`
    width: 45%;    
    color: green;
`

const ButtonReset = styled.button`
    width: 45%;
    color: gray;
`

const closeModal = () => {
    document.querySelector('#modal')?.classList.remove('modal-active')
}

const FormNovaTranzaction = () => {

    const { user } = useAuth()

    const { register, errors, handleSubmit } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = async (data: TranzactionData) => {

        data.amount = data.amount * 100
        data.uid = user.uid

        db.collection('tranzactions')
            .doc()
            .set(data)
            .then(() => {
                closeModal()
            })
    }

    const date: any = new Date()

    const dataYear = date.getYear()
    const dataMonth = date.getMonth()
    const dateDay = date.getDay()

    const currentDate = dataYear + dataMonth + dateDay

    return <>
        <FormTranzaction className='formtranzaction' onSubmit={handleSubmit(onSubmit)} >
            <TitleForm>Adicionar Nova Tranzação</TitleForm>
            <FormGroupRadio>
                <LabelRadio htmlFor='tipo'><FormRadio
                    type='radio'
                    id='tipo'
                    name='tipo'
                    value='saida'
                    ref={register({
                        required: 'Selecione o tipo de despesa.',
                    })}
                /> <Tipografy>Saída</Tipografy>
                </LabelRadio>

                <LabelRadio htmlFor='tipo'><FormInput
                    type='radio'
                    id='tipo'
                    name='tipo'
                    value='entrada'
                    ref={register({
                        required: 'Selecione o tipo de despesa.',
                    })}
                /> Entrada</LabelRadio>


                {errors.tipo && (
                    <div><small>{errors.tipo.message}</small></div>
                )}
            </FormGroupRadio>
            <FormGroup>
                <label className='sr-only' htmlFor='description'>Descrição</label>
                <FormInput
                    type='text'
                    id='description'
                    name='description'
                    placeholder='Descrição'
                    ref={register({
                        required: 'Preencha o nome da tranzação.',
                    })}
                />
                {errors.description && (
                    <div><small>{errors.description.message}</small></div>
                )}
            </FormGroup>
            <FormGroup>
                <label className='sr-only' htmlFor='amount'>Valor</label>
                <FormInput
                    type='number'
                    id='amount'
                    name='amount'
                    placeholder='Valor'
                    step='0.01'
                    ref={register({
                        required: 'Coloque o valor da tranzação.',
                    })}
                />
                {errors.amount && (
                    <div><small>{errors.amount.message}</small></div>
                )}
                <small>Use o sinal de - (negativo) para despesas e , (virgula) para as casas decimais.</small>
            </FormGroup>
            <FormGroup>
                <label className='sr-only' htmlFor='date'>Data de Lançamento</label>
                <FormInput
                    type='date'
                    id='date'
                    name='date'
                    placeholder='00/00/0000'
                    value={currentDate}
                    ref={register({
                        required: 'Selecione a data de lançamento',
                    })}
                />
                {errors.date && (
                    <div><small>{errors.date.message}</small></div>
                )}
            </FormGroup>
            <FormGroupActions>
                <ButtonReset onClick={closeModal} type='reset' className='btn' > Cancelar </ButtonReset>
                <ButtonSubmit type='submit' className='btn adicionar' > Adicionar </ButtonSubmit>
            </FormGroupActions>
        </FormTranzaction>
    </>

}

export default FormNovaTranzaction