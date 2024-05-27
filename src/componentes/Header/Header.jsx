import React from "react"
import "./Header.css"
import Logo from "./imgHeader/clarice1.jpg"

function Header (){
    return(
        <header>

            <img src={Logo} alt="" />
<h2>Clarisse Lispector</h2>

{/* <nav>
<ul>
    <li>Sobre</li>
    <li>Livros</li>
</ul>
</nav>

<form>
<label>Nome:</label>
<input type="text" placeholder="Digite o seu nome" />
<label>Digite a sua senha:</label>
<input type="password" placeholder="Digite a sua senha" />
<button>Entrar</button>
</form> */}

</header>
    )
}

export default Header