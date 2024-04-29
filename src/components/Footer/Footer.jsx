import * as S from "./styled"
import insta from "../../assets/instagram.png"
import behance from "../../assets/behance.png"
import github from "../../assets/github.png"


export default function Footer() {
  return (
   <S.Footer>
       <div className="footer">
        <a href="https://www.instagram.com/raisantdsgn/" target="_blank"> <img src={insta} alt="" /></a>
        <a href="https://www.behance.net/EuSouRaissa" target="_blank"> <img src={behance} alt="" /></a>
        <a href="https://github.com/Raissa-Santana" target="_blank"> <img src={github} alt="" /></a>
       </div>
   </S.Footer>
  )
}