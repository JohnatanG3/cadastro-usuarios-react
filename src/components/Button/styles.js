import styled from "styled-components";

export const Button = styled.button `
    border: ${props => props.theme ==="primary" ? "none" : "1px solid #FFFFFF"};
    color: #FFFFFF;
    background: ${props => props.theme === "primary" ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)" : "transparent"};
    font-size: 16px;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    ${props => props.theme !== "primary" && `
        &:hover {
            background: #0000cd;
        }
    `}

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
` 