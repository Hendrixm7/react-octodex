import React, { Component, Fragment } from 'react'
import HelloWorld from './components/HelloWorld'
import Cat from './components/Cat'
import Header from './components/Header'
import Fintechtocat from './images/Fintechtocat.png'
import Investocat from './images/privateinvestocat.jpg'
import Tentocats from './images/tentocats.jpg'
import Scubatocat from './images/scubatocat.png'
import Octogatos from './images/Octogatos.png'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <section class="container">
            <div class="grid-row">
              <Cat catName="Fintechtocat" index={1} imageUrl={Fintechtocat} />
              <Cat
                catName="privateinvestocat"
                index={2}
                imageUrl={Investocat}
              />
              <Cat catName="tentocats" index={3} imageUrl={Tentocats} />
              <Cat catName="scubatocat" index={4} imageUrl={Scubatocat} />
              <Cat catName="octogatos" index={5} imageUrl={Octogatos} />
              {/* <div class="grid-item">
                <img class="avatar" src={Fintechtocat} />
                <div class="info-box">
                  <span class="cat-index">#146</span>
                  <span class="cat-name">Fintechtocat</span>
                </div>
              </div>
              <div class="grid-item">
                <img class="avatar" src={privateinvestocat.jpg} />
                <div class="info-box">
                  <span class="cat-index">#121</span>
                  <span class="cat-name">Investocat</span>
                </div>
              </div>
              <div class="grid-item">
                <img class="avatar" src={tentocats} />
                <div class="info-box">
                  <span class="cat-index">#136</span>
                  <span class="cat-name">Tentocats</span>
                </div>
              </div>
              <div class="grid-item">
                <img class="avatar" src={scubatocat} />
                <div class="info-box">
                  <span class="cat-index">#138</span>
                  <span class="cat-name">Scubatocat</span>
                </div>
              </div>
              <div class="grid-item">
                <img class="avatar" src={Octogatos} />
                <div class="info-box">
                  <span class="cat-index">#148</span>
                  <span class="cat-name">Octogatos</span> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </section>
        </main>
      </Fragment>
    )
  }
}

export default App
