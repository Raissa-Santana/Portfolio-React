import styled from "styled-components"

export const Section =styled.section`
    background-color: #00042c;
    padding-top: 60px;
    width: 100%;
    height: 760px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    padding: 180px 80px;

    h1{
        color: white;
        font-weight: 800;
        font-size: 30px;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 300px;

    img{
        width: 320px;
    }
`