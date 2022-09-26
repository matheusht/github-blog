import styled from "styled-components";


export const CardContainer = styled.div`
width: 100%;
max-width: 54rem;
display: flex;
justify-content: center;
font-family: 'Nunito', sans-serif;
align-items: center;
margin: auto;
border: 0;
z-index: 1;
flex-direction: column;
background: ${({ theme }) => theme['green-700']};
padding: 32px 40px;
gap: 2rem;
 


`

export const ActionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
color: ${({ theme }) => theme['blue-500']};
    div {
        display: flex;
        gap: 8px;
    }

    p {
        font-size: 0.75rem;
    }

`

export const BodyContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8px;
strong {
    font-size: 1.5rem;
}

span {
    display: flex;
    gap: 32px;

    a {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${({ theme }) => theme['gray-500']};
    }
}

svg {
    color: ${({ theme }) => theme['green-100']};
}

`