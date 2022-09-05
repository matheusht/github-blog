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



`