
import * as S from "./components/Header/styled"
import Header from "./components/Header/Header";
import Inicio from "./Pages/Inicio/Inicio";
import Sobre from "./Pages/Sobre/Sobre";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contato from "./Pages/Contato/Contato"
import Footer from "./components/Footer/Footer";


export default function App() {
 
  return (

    <>
      <Header />
      <S.GlobalStyled />
      <Inicio />
      <Sobre />
      <Portfolio />
      <Contato />
      <Footer />
    </>
  )
}