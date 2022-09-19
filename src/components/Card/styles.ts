import styled from "styled-components";


export const CardContainer = styled.div`
width: 100%;
max-width: 54rem;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
height: 13.25rem;
z-index: 1;
background: ${({ theme }) => theme['green-700']};
position: absolute;
top: 100%;
left: 50%;
transform: translate(-50%, -50%);
padding: 32px 40px;
gap: 2rem;
 
img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
}


div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
}

strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
}

p {
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme['gray-300']};
}


span {
   display: flex;
    gap: 1.5rem;
}

span > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
}



`