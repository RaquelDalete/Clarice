import React, {useState} from 'react'
import "./Main.css"
import Img1 from "./imgMain/a-descoberta-do-mundo.jpg"
import Img2 from "./imgMain/acidadesitiada.jpg"
import Img3 from "./imgMain/aguaviva.jpg"
import Img4 from "./imgMain/amacanoescuro.jpeg"
import Img5 from "./imgMain/as-palavras.jpg"
import Img6 from "./imgMain/hora-da-estrela.jpg"
import Img7 from "./imgMain/correspondencias.jpg"
import Img8 from "./imgMain/laços.jpg"    
import Img9 from "./imgMain/minhas-queridas.jpg"     
import Img10 from "./imgMain/o-lustre.jpg"
import Img11 from "./imgMain/quase-de-verdade.jpg"
import Img12 from "./imgMain/umsoprodevida.jpg"
import Img13 from "./imgMain/via-cruci.jpg"
import Img14 from "./imgMain/felicidade.jpg"
import Img15 from "./imgMain/perto.jpg"


function Main(){

    const [livros, setLivros] = useState([

{imagem: Img1, nome:"A Descoberta do Mundo", link:"https://dlivros.com/livro/descoberta-mundo-clarice-lispector"},
{imagem: Img2, nome:"A Cidade Sitiada", link:"https://dlivros.com/livro/cidade-sitiada-clarice-lispector"},
{imagem: Img3, nome:"Água Viva", link:"https://dlivros.com/livro/agua-viva-clarice-lispector"},
{imagem: Img4, nome:"A Maça No Escuro", link:"https://dlivros.com/livro/maca-escuro-clarice-lispector"},
{imagem: Img5, nome:"As Palavras", link:"https://dlivros.com/livro/palavras-clarice-lispector"},
{imagem: Img6, nome:"A Hora Da Estrela", link:"https://dlivros.com/livro/hora-estrela-clarice-lispector"},
{imagem: Img13, nome:"A Via Crucis Do Corpo", link:"https://dlivros.com/livro/via-crucis-corpo-clarice-lispector"},
{imagem: Img7, nome:"Correspondências", link:"https://dlivros.com/livro/correspondencias-clarice-lispector"},
{imagem: Img14, nome:"Felicidade Clandestina", link:"https://dlivros.com/livro/felicidade-clandestina-clarice-lispector"},
{imagem: Img8, nome:"Laços De Família", link:"https://dlivros.com/livro/lacos-familia-clarice-lispector"},
{imagem: Img9, nome:"Minhas Queridas", link:"https://livrogratuitosja.com/wp-content/uploads/2021/03/Minhas-Queridas-Clarice-Lispector.pdf"},
{imagem: Img10, nome:"O Lustre", link:"https://dlivros.com/livro/lustre-clarice-lispector"},    
{imagem: Img15, nome:"Perto Do Coração Selvagem", link:"https://dlivros.com/livro/perto-coracao-selvagem-clarice-lispectornpm "},    
{imagem: Img11, nome:"Quase De Verdade", link:"https://dlivros.com/livro/quase-verdade-clarice-lispector"},
{imagem: Img12, nome:"Um Sopro De Vida", link:"https://dlivros.com/livro/sopro-vida-clarice-lispector"},



    ])
    return(
        <main>
<section>
    {livros.map((item)=> (
<div>
    <img src= {item.imagem}  alt={item.nome}/>
    <h3> {item.nome}</h3>
    <a href= {item.link}  target="_blank"> <button>Baixar</button></a>


</div>
    ))}
</section>


        </main>
    )
}

export default Main