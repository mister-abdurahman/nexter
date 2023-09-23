import svgSprites from './assets/img/sprite.svg';

import storyImg1 from './assets/img/story-1.jpeg';
import storyImg2 from './assets/img/story-2.jpeg';

import homeImg1 from './assets/img/house-1.jpeg';
import homeImg2 from './assets/img/house-2.jpeg';
import homeImg3 from './assets/img/house-3.jpeg';
import homeImg4 from './assets/img/house-4.jpeg';
import homeImg5 from './assets/img/house-5.jpeg';
import homeImg6 from './assets/img/house-6.jpeg';

import galleryImg1 from './assets/img/gal-1.jpeg';
import galleryImg2 from './assets/img/gal-2.jpeg';
import galleryImg3 from './assets/img/gal-3.jpeg';
import galleryImg4 from './assets/img/gal-4.jpeg';
import galleryImg5 from './assets/img/gal-5.jpeg';
import galleryImg6 from './assets/img/gal-6.jpeg';
import galleryImg7 from './assets/img/gal-7.jpeg';
import galleryImg8 from './assets/img/gal-8.jpeg';
import galleryImg9 from './assets/img/gal-9.jpeg';
import galleryImg10 from './assets/img/gal-10.jpeg';
import galleryImg11 from './assets/img/gal-11.jpeg';
import galleryImg12 from './assets/img/gal-12.jpeg';
import galleryImg13 from './assets/img/gal-13.jpeg';
import galleryImg14 from './assets/img/gal-14.jpeg';

import logo from './assets/img/logo.png';

import bbc from './assets/img/logo-bbc.png';
import techCrunch from './assets/img/logo-techcrunch.png';
import forbes from './assets/img/logo-forbes.png';
import bi from './assets/img/logo-bi.png';

import realtor1 from './assets/img/realtor-1.jpeg';
import realtor2 from './assets/img/realtor-2.jpeg';
import realtor3 from './assets/img/realtor-3.jpeg';

function App() {

  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <header className="header">
        <img src={logo} alt="" className='header__logo'/>
        <h3 className='heading-3'>Get Your own home</h3>
        <h1 className='heading-1'>The right step to Ultimate Freedom</h1>
        <button className="btn header__btn">Check out our Properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src={bbc} alt="BBC logo" />
          <img src={forbes} alt="forbes logo" />
          <img src={bi} alt="Bi logo" />
          <img src={techCrunch} alt="TechCrunch logo" />
        </div>
      </header>
      <div className="realtors">
        <h3 className='heading-3'>Top 3 realtors</h3> 
        <div className="realtors__bios">
          <figure className='realtors__bios--img-box'><img src={realtor1} alt="realtor 1" /></figure>
          <div className="realtors__bios--text-detail">
            <h4 className='heading-4 heading-4--light'>Ibrahim Basit</h4>
            <p>242 Houses sold</p>
          </div>

          <figure className='realtors__bios--img-box'><img src={realtor2} alt="realtor 1" /></figure>
          <div className="realtors__bios--text-detail">
            <h4 className='heading-4 heading-4--light'>Yusuf Anwar</h4>
            <p>100 Houses sold</p>
          </div>

          <figure className='realtors__bios--img-box'><img src={realtor3} alt="realtor 1" /></figure>
          <div className="realtors__bios--text-detail">
            <h4 className='heading-4 heading-4--light'>Abdurahman A.</h4>
            <p>940 Houses sold</p>
          </div>
        </div>
        </div>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-global`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">World's best luxury home</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, asperiores optio quae eos voluptatibus reiciendis amet animi similique velit, accusamus repellat, aperiam dolore? Voluptatem autem laboriosam velit deleniti ullam nemo!</p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-trophy`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, asperiores optio quae eos voluptatibus reiciendis amet animi similique velit, accusamus repellat, aperiam dolore? Voluptatem autem laboriosam velit deleniti ullam nemo!</p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-key`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, asperiores optio quae eos voluptatibus reiciendis amet animi similique velit, accusamus repellat, aperiam dolore? Voluptatem autem laboriosam velit deleniti ullam nemo!</p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-global`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">World's best luxury home</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${svgSprites}#icon-global`}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">Secure payments on Nexter</h4>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, asperiores optio quae eos !</p>
        </div>
      </section> 
      <div className="story__pictures">
        <img src={storyImg1} alt="Couple with new house" className='story__img--1'/>
        <img src={storyImg2} alt="New House" className='story__img--2'/>
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-sm">&ldquo;The best decision of our lives&ldquo;</h2>
        <p className="story__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quisquam beatae praesentium et numquam, nesciunt non provident, quibusdam.</p>
        <button className='btn'>Find your dream home</button>

      </div>
      <section className="homes">
        
        <div className="home">
          <img src={homeImg1} alt="home 1" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>Beautiful Family house</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>$1,500,000</p>
          </div>
          <button className='btn btn__home'>Contact Realtor</button>
        </div>

        <div className="home">
          <img src={homeImg2} alt="home 2" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>Modern Glass Vila</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>Canada</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>550 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>$3,420,000</p>
          </div>
          <button className='btn btn__home'>Contact Realtor</button>
        </div>

        <div className="home">
          <img src={homeImg3} alt="home 3" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>5 star Estate arena</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>Nigeria</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>16 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>850 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>#8,500,000</p>
          </div>
          <button className='btn btn__home'>Contact Realtor</button>
        </div>

        <div className="home">
          <img src={homeImg4} alt="home 4" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>18 Storey skyscraper</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>Dubai</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>102 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>78500 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>$5,300,000,980</p>
          </div>
          <button className='btn btn__home'>Contact Realtor</button>
        </div>

        <div className="home">
          <img src={homeImg5} alt="Home 5" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>Beautiful Family house</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>$1,500,000</p>
          </div>
          <button className='btn btn__home'>Contact Realtor</button>
        </div>

        <div className="home">
          <img src={homeImg6} alt="Home 6" className='home__img'/>
          <svg className='home__like'>
          <use xlinkHref={`${svgSprites}#icon-heart-full`}></use>
          </svg>
          <h5 className='home__name'>Beautiful Family house</h5>
          <div className="home__location">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-map-pin`}></use>
            </svg>
              <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-profile-male`}></use>
            </svg>
              <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-expand`}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg>
              <use xlinkHref={`${svgSprites}#icon-key`}></use>
            </svg>
            <p>$1,500,000</p>
          </div>
          <button className="btn btn__home">Contact Realtor</button>
        </div>
      </section>
      <section className="gallery">
        <figure className='gallery__item gallery__item--1'>
        <img src={galleryImg1} alt="Gallery 1" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--2'>
        <img src={galleryImg2} alt="Gallery 2" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--3'>
        <img src={galleryImg3} alt="Gallery 3" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--4'>
        <img src={galleryImg4} alt="Gallery 4" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--5'>
        <img src={galleryImg5} alt="Gallery 5" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--6'>
        <img src={galleryImg6} alt="Gallery 6" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--7'>
        <img src={galleryImg7} alt="Gallery 7" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--8'>
        <img src={galleryImg8} alt="Gallery 8" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--9'>
        <img src={galleryImg9} alt="Gallery 9" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--10'>
        <img src={galleryImg10} alt="Gallery 10" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--11'>
        <img src={galleryImg11} alt="Gallery 11" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--12'>
        <img src={galleryImg12} alt="Gallery 12" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--13'>
        <img src={galleryImg13} alt="Gallery 13" className='gallery__img'/>
        </figure>
        <figure className='gallery__item gallery__item--14'>
        <img src={galleryImg14} alt="Gallery 14" className='gallery__img'/>
        </figure>
      </section>
      <footer className="footer">
        <ul className='nav'>
          <li className="nav__item"><a href="#" className="nav__link">Find your dream Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Make a Request</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Download planner template</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Submit Property</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Partner with us</a></li>
        </ul>
        <p className="copyright">&copy; 2023 Abdurahman. A Real Estate Company website to flex my Grid Skills. Hope you love it. 😍💖</p>
      </footer>
    </div>
  )
}

export default App
