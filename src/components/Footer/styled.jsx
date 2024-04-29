import styled,{css} from "styled-components"


const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const Footer =styled.header`
    background-color: #0f0045;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
    }
    a{
        text-decoration: none;
    }

    img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
    }
`