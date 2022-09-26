import styled from "styled-components";


export const IssueContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
margin-top: -100px;
max-width: 54rem;


`


export const ArticleBody = styled.div`

    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    font-size: 1rem;
    width: 100%;
    gap: 32px;
    line-height: 160%;

    a {
        cursor: pointer;
        color: ${({ theme }) => theme['blue-500']};
        text-decoration: underline;
    }


    article {
        display: flex;
        background: ${({ theme }) => theme['green-600']};
        padding: 16px;
        border-radius: 2px;
        flex-direction: column;
        color: ${({ theme }) => theme['white']};
        font-family: 'Fira Code', monospace;

        div {
            display: flex;
            gap: 10px;

        }
    }
    
`

interface VariableProps {
    color: 'blue-300' | 'green-400' | 'gray-600';
}

export const Variable = styled.div<VariableProps>`
    display: flex;
    flex-direction: row;
    color: ${({ color, theme }) => theme[color]};
`