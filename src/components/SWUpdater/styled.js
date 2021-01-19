import styled from "styled-components"

export const NotificationWrapper = styled.div`
    color: white;
    width: 300px;
    height: 50px;
    position: fixed;
    right: calc(50vw - 300px / 2);
    background-color: black;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;

    animation: moveUp 1s ease-in-out both;

    @keyframes moveUp {
        0% {
            bottom: -100vh;
        }
        100% {
            bottom: 90px;
        }   
    }
`

export const IconWrapper = styled.div`
    width: 35px;
    margin-left: 5px;
`