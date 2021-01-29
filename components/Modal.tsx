import styled from 'styled-components';
import FormNovaTranzaction from '../components/Form/FormNovaTranzaction'

const ModalOverlay = styled.div`
    position: fixed; 
    top: 0;
    background: #19191985;
    width: 100%;
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;
`
const ModalContent = styled.div`
    background: #f0f2f2;
    padding: 2.4rem;
    display: relative;
    width: 85%;
    max-width: 500px;
`

const Modal = () => {
    return <>
        <ModalOverlay id='modal' >
            <ModalContent>
                <FormNovaTranzaction />
            </ModalContent>
        </ModalOverlay>

    </>
}

export default Modal