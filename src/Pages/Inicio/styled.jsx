import styled, {css} from "styled-components"

const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Section=styled.section`
    padding: 10px 80px;
    background-color: #00042c;
    width: 100%;
    height: 760px;
    ${center}

    .texto-animado{
        width: 50%;
        h1{
            color: white;
            font-size: 50px;
            font-weight: 600;
            height: 160px;
        }
        
        p{
            color: white;
            font-size: 15px;
            text-align: justify;
        }
    }

    .img{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    img{
        height: 440px;
    }
`