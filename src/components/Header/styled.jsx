import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`
const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Header =styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 60px;
    background-color: #0f0045;
    width: 100%;
    height: 60px;
    ${center}

    .img{
        
        background-color: white;
        overflow: hidden;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 70px;
    }

    .navbar{
        ${center}
        gap: 50px;

        .nav-item{
            list-style: none;
            cursor: pointer !important;

            a{
                text-decoration: none;
                color: white;
                font-weight: 600;
                transition: all 300ms;
                cursor: pointer !important;

                &:hover{
                    color: #ff3c00;
                }
            }
        }
    }
`