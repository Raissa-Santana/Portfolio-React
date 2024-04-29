import styled, {css} from "styled-components"

const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Section =styled.section`
    background-color: #00042c;
    padding: 90px 0;
    width: 100%;
    height: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .storys{
        padding: 30px 60px;
        background-color: #ff3c00;
        width: 50%;
        border-radius: 10px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        h1{
        color: white;
        font-weight: 800;
        font-size: 30px;
        }
        p{
            color: white;
            font-size: 15px;
            text-align: justify;
        }
    }
`