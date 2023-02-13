import { Component } from "react";
import logo from '../images/Pokemon.png';
import ash from '../images/Ash.webp';
import pika from '../images/pikapika.webp';
import pk from '../images/25.svg';
import rk from '../images/143.svg';
import jk from '../images/197.svg';
import pokeCast from '../images/mainCast1.png';
 
export default class PageHome extends Component{
  state = {
  }

      async componentDidMount() {
    }     
      render () {
        //const mystyle = { 'background-image': "url('../images/background.jpg')"};
         return (
            <div id="container">
              <div className="image-container">
                <img src={logo} alt="Logo" position="absolute" top="200px"/>
              </div>
              <div id="leftbox">
                <div><img src={ash} alt="ash" width="500px" height="650px" top="-300px" position="absolute"/></div>
              </div>
              <div id="rightbox">
                <div class="pikachu"><img src={pokeCast} alt="pokeCast" width="1000px"/></div>
              </div>
              <div id="middlebox" class="center">
                <div class="box1" white-space="nowrap" overflow="auto">
                  <main class="slides">
                    <section class="section-1">
                      <img src={pk} alt="pk" class="rounded mx-auto d-block img-fluid" opacity="1" width="330px"/>
                      <h2 className="text-center">PIKACHU</h2>
                      <div class="stats">
                        <div>
                          <h3>55</h3>
                          <p>Attack</p>
                        </div>
                        <div>
                          <h3>40</h3>
                          <p>Defense</p>
                        </div>
                        <div>
                          <h3>90</h3>
                          <p>Speed</p>
                        </div>
                      </div>
                    </section>
                    <section class="section-2">
                      <img src={rk} alt="rk" class="rounded mx-auto d-block img-fluid"/>
                      <h3 className="text-center">SNORLAX</h3>
                      <div class="stats">
                        <div>
                          <h3>110</h3>
                          <p>Attack</p>
                        </div>
                        <div>
                          <h3>65</h3>
                          <p>Defense</p>
                        </div>
                        <div>
                          <h3>30</h3>
                          <p>Speed</p>
                        </div>
                      </div>
                    </section>
                    <section class="section-3">
                      <img src={jk} alt="jk" class="rounded mx-auto d-block img-fluid" width="400px"/>
                      <h3 className="text-center">UMBREON</h3>
                      <div class="stats">
                        <div>
                          <h3>65</h3>
                          <p>Attack</p>
                        </div>
                        <div>
                          <h3>110</h3>
                          <p>Defense</p>
                        </div>
                        <div>
                          <h3>65</h3>
                          <p>Speed</p>
                        </div>
                      </div>
                    </section>
                  </main>
                </div>
              </div>
            </div>
        );
      }
}
 