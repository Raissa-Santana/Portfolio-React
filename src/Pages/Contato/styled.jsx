import styled from "styled-components"

export const Section =styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #00042c;
    width: 100%;
    height: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container{
        height: 350px;
        border-radius: 10px;
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #ff3c00;
        color: #FFF;
        padding: 14px;
    }

.title{
  margin-bottom: 14px;
}

.form{
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input{
  margin-bottom: 14px;
  height: 34px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
}

.textarea{
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  height: 94px;
  resize: none;
}

.button{
    color: white;
    font-size: 15px;
    font-weight: 500;
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background-color: #0f0045;
    font-size: 18px;
    transition: background-color, transform 0.8s;
}

.button:hover{
  background-color: #00042c;
  transform: scale(1.01);
}
`