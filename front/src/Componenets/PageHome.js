import { Component } from "react";
import logo from '../images/Pokemon.png';
import ash from '../images/Ash.webp';
import pika from '../images/pikapika.webp';
import pk from '../images/25.svg';
import rk from '../images/143.svg';
import jk from '../images/197.svg';
import pokeCast from '../images/mainCast1.png';

import im2 from '../images/pikaLOGO.gif';
import im3 from '../images/mainCast1.png';
 
export default class PageHome extends Component{
  state = {
  }

      async componentDidMount() {
    }     
      render () {
        //const mystyle = { 'background-image': "url('../images/background.jpg')"};
         return (
          <div class="body">
          <main class="container" style={{maxwidth: '1440px', margin: '0 auto', display: 'flex', alignitems: 'center', height: 'calc(100vh - 132px)', padding:'0 30px 30px', position: 'relative', zindex: '1'}}>
            <div class="informacoes">
              <img
                class="imagem_titulo"
                src={im2}
                alt="titulo do filme"
              />
              <p class="descricao">
                <div>
                  <h1 style={{ color: "black" }}>Add some Pokemons to your collection and have fun!</h1>
                  <h4 style={{ color: "black" }}>Explore the world of Pokemon and catch 'em all! Start by searching for your favorite Pokemon, and add them to your collection. You can even battle other trainers and trade your Pokemon to complete your collection.</h4>
                </div>
              </p>
              <a href="AddPokemon">
                <button class="botao">Find POKEMONS</button>
              </a>
            </div>
            <img class="img_mario" src={im3} alt="" style={{maxwidth: '500px', flexwrap: 'wrap', justifycontent: 'center', height: 'auto', gap: '30px'}}/>
            <div class="modal">
            </div>
          </main>
        </div>
        );
      }
}
 