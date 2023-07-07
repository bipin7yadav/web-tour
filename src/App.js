import './App.css';
import logo from "./img/logo-white.png"
import img1 from "./img/nat-1-large.jpg"
import img2 from "./img/nat-2-large.jpg"
import img3 from "./img/nat-3-large.jpg"
import nat8 from "./img/nat-8.jpg"
import nat9 from "./img/nat-9.jpg"

import videoMP4 from './img/video.mp4';
import videoWebM from './img/video.webm';

import { TfiWorld } from "react-icons/tfi"
import { LiaCompass } from "react-icons/lia"
import { BsMap } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"

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
                <i class="feature-box__icon icon-basic-compass"><LiaCompass /></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-map"><BsMap /></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-heart"><AiOutlineHeart /></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
              Most popular tours
            </h2>
          </div>

          <div class="row">
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">
                    &nbsp;
                  </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$297</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">
                    &nbsp;
                  </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">The Forest Hiker</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>7 day tours</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>

                </div>
                <div class="card__side card__side--back card__side--back-2">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$497</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">
                    &nbsp;
                  </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>5 day tours</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>

                </div>
                <div class="card__side card__side--back card__side--back-3">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">$897</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--green">Discover all tours</a>
          </div>
        </section>

        <section class="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoplay muted loop>
              <source src={videoMP4} type="video/mp4" />
              <source src={videoWebM} type="video/webm" />
              Your browser is not supported!
            </video>
          </div>

          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={nat8} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Mary Smith</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                  ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                  repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={nat9} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Jack Wilson</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                  ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                  repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn-text">Read all stories &rarr;</a>
          </div>
        </section>

        <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full name" id="name" required/>
                                    <label for="name" class="form__label">Full name</label>
                                </div>

                                <div class="form__group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required/>
                                    <label for="email" class="form__label">Email address</label>
                                </div>

                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size"/>
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="large" name="size"/>
                                        <label for="large" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <a class="btn btn--green">Next step &rarr;</a>
                                </div>
                            </form>
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
