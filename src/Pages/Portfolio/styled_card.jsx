import styled from "styled-components"


export const Card = styled.div`
    width: 300px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    overflow: hidden;

    img{
        width: 325px;
        height: 180px;

        transition: transform 0.3s ease;

        &:hover{
           transform: scale(1.2);
        }
    }

`