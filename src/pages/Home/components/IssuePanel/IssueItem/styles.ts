import styled from "styled-components";



export const IssueItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 32px;
    cursor: pointer;
    gap: 20px;
    background-color: ${({ theme }) => theme['green-600']};
    border-radius: 10px;

    div {
        display: flex;
        width: 100%;
        gap: 16px;
    }

    h3 {
        font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};

    }
    span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['gray-500']};
        min-width: 55px;
        margin-top: 5px;
    }

    p {
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 160%;
        color: ${({ theme }) => theme['gray-300']};
    }

`