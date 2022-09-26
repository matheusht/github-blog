import styled from "styled-components";



export const SearchBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 72px;
    gap: 12px;
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        h3 {
            color: ${({ theme }) => theme['gray-200']};
            font-size: 1.125rem;
        }

        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme['gray-500']};
        }

    }

    input {
        width: 100%;
        padding: 12px 16px;
        background-color: ${({ theme }) => theme['green-900']};
        color: ${({ theme }) => theme['white']};
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme['green-500']};
    }

    input::placeholder {
        color: ${({ theme }) => theme['green-100']};

    }



`