import './App.css';
import logo from "./img/logo-white.png"
import img1 from "./img/nat-1-large.jpg"
import img2 from "./img/nat-2-large.jpg"
import img3 from "./img/nat-3-large.jpg"
import {TfiWorld} from "react-icons/tfi"
import {LiaCompass} from "react-icons/lia"
import {BsMap} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__logo-box">
          <img src={`${logo}`} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="/
          " className="btn btn--white btn-animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className='section-about'>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div class="row">
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="/" class="btn-text">Learn more &rarr;</a>
            </div>
            <div class="col-1-of-2">
              <div class="composition">
                <img src={img1} alt="Photo 1" class="composition__photo composition__photo--p1" />
                <img src={img2} alt="Photo 2" class="composition__photo composition__photo--p2" />
                <img src={img3} alt="Photo 3" class="composition__photo composition__photo--p3" />
              </div>
            </div>
          </div>

        </section>
        <section class="section-features">
                
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-world"><TfiWorld /></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-compass"><LiaCompass/></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"><BsMap/></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                             <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-heart"><AiOutlineHeart/></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
      </main>
      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>col 1 of 2</div>
          <div className='col-1-of-2'>col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>col 1 of 3</div>
          <div className='col-1-of-3'>col 1 of 3</div>
          <div className='col-1-of-3'>col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>col 1 of 3</div>
          <div className='col-2-of-3'>col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-1-of-4'>col 1 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-2-of-4'>col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>col 1 of 4</div>
          <div className='col-3-of-4'>col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
