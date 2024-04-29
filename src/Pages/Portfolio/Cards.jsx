import * as S from "./styled_card"

export default function Card(props) {
  return (
    <S.Card>
        <img src={props.imagem} alt="" />
    </S.Card>
  )
}