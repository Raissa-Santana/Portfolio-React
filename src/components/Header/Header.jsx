import * as S from "./styled"
import logo from "../../assets/eu.jpg"
import { Link } from 'react-scroll';


export default function Header() {


  return (
   <S.Header>
       <div className="img">
          <img src={logo} alt="" />
       </div>
       <ul className="navbar">
          <li className="nav-item"><Link to="Inicio" smooth={true} duration={800} style={{ cursor: 'pointer' }}>Início</Link></li>
          <li className="nav-item"><Link to="Sobre" smooth={true} duration={800} style={{ cursor: 'pointer' }} >Sobre</Link></li>
          <li className="nav-item"><Link to="Portfolio" smooth={true} duration={800} style={{ cursor: 'pointer' }} >Portfólio</Link></li>
          <li className="nav-item"><Link to="Contato" smooth={true} duration={800} style={{ cursor: 'pointer' }} >Contato</Link></li>
       </ul>
   </S.Header>
  );
}

