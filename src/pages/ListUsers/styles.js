import styled from "styled-components";

export const Container = styled.div `
    background-color: #181F36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Containerusers = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardUsers = styled.div `
    background-color: #252D48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: #FFFFFF;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 200;
    }
`

export const AvatarUser = styled.img `
    height: 80px;
`

export const TrashIcon = styled.img `
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`