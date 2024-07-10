import React from 'react'
import Slider from 'react-slick'
import CountUp from 'react-countup';
import {Image, Carousel, Button,} from 'react-bootstrap';
import SliderImg1 from '../Assets/Header_Slide_1.png';
import SliderImg2 from '../Assets/Header_Slide_2.png';
import SliderImg3 from '../Assets/Header_Slide_3.png';
import SliderImg4 from '../Assets/Header_Slide_4.png';
import SliderImg5 from '../Assets/Header_Slide_5.png';
import BannerImg1 from '../Assets/Banner_Slide_1.png';
import BannerImg2 from '../Assets/Banner_Slide_2.png';
import BannerImg3 from '../Assets/Banner_Slide_3.png';
import BannerImg4 from '../Assets/Banner_Slide_4.png';
import LandingImg1 from '../Assets/Landing_Image_1.png';
import LandingImg2 from '../Assets/Landing_Image_2.png';
import LandingImg3 from '../Assets/Landing_Image_3.png';
import LandingImg4 from '../Assets/Landing_Image_4.png';
import LandingImg5 from '../Assets/Landing_Image_5.png';
import LandingImg6 from '../Assets/Landing_Image_6.png';
import LandingImg7 from '../Assets/Landing_Image_7.png';
import LandingImg8 from '../Assets/Landing_Image_8.png';
import LandingImg9 from '../Assets/Landing_Image_9.png';
import BlogImg1 from '../Assets/Blog_Image_1.png';
import BlogImg2 from '../Assets/Blog_Image_2.png';
import BlogImg3 from '../Assets/Blog_Image_3.png';
import BlogImg4 from '../Assets/Blog_Image_4.png';
import BlogImg5 from '../Assets/Blog_Image_5.png';
import BlogImg6 from '../Assets/Blog_Image_6.png';
import BlogImg7 from '../Assets/Blog_Image_7.png';
import BlogImg8 from '../Assets/Blog_Image_8.png';
import BlogImg9 from '../Assets/Blog_Image_9.png';
import LogoImg1 from '../Assets/Logo_1.png';
import LogoImg2 from '../Assets/Logo_2.png';
import LogoImg3 from '../Assets/Logo_3.png';
import LogoImg4 from '../Assets/Logo_4.png';
import LogoImg5 from '../Assets/Logo_5.png';
import LogoImg6 from '../Assets/Logo_6.png';
import LogoImg7 from '../Assets/Logo_7.png';
import LogoImg8 from '../Assets/Logo_8.png';
import FooterLogo from '../Assets/Footer-Logo.png';


const Home = () => {

  const settings ={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
  };


  return (
    <>
      <section>
      <Carousel>
            <Carousel.Item>
            <Image className='headerImg d-block w-100' src={SliderImg1}  alt='First slide' />
            <Carousel.Caption>
            <h1 className='text-primary f1-prime head1 text-start'><span className='outline'>MODERN</span> RECEPTION</h1>
            <p className='headpara text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
            <Image className='headerImg d-block w-100' src={SliderImg2}  alt='Second slide' />
            <Carousel.Caption>
            <h1 className='text-primary f1-prime head1 text-start'><span className='outline'>MODERN</span> RECEPTION</h1>
            <p className='headpara text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
            <Image className='headerImg d-block w-100' src={SliderImg3}  alt='Third slide' />
            <Carousel.Caption>
            <h1 className='text-primary f1-prime head1 text-start'><span className='outline'>MODERN</span> RECEPTION</h1>
            <p className='headpara text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
            <Image className='headerImg d-block w-100' src={SliderImg4}  alt='Fourth slide' />
            <Carousel.Caption>
            <h1 className='text-primary f1-prime head1 text-start'><span className='outline'>MODERN</span> RECEPTION</h1>
            <p className='headpara text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
            <Image className='headerImg d-block w-100' src={SliderImg5}  alt='Fifth slide' />
            <Carousel.Caption>
            <h1 className='text-primary f1-prime head1 text-start'><span className='outline'>MODERN</span> RECEPTION</h1>
            <p className='headpara text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </p>
            </Carousel.Caption>    
            </Carousel.Item>
        </Carousel>
      </section>
        
        <section className='header bg-back py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h1 className='text-primary head1 py-3'><span className='head2'>WELCOME</span></h1>
                <h2 className='text-primary head1 py-2'>WE ARE <span className='outline'>CREATIVE</span>
                <br/>BUILDING - DESIGN COMPANY</h2>
                <p className='headpara1 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
                <Button className='btn-primary'>READ MORE</Button>
              </div>
              <div className='col-lg-6'>
                <div className='position-relative'>
                  <div className='position-absolute top-100 start-0 my-4'>
                    <div className='rectangle'></div>
                  </div>
                </div>
                <div className='galler py-5 px-5'>
                  <Slider {...settings} >
                  <Image className='images' src={BannerImg1} alt='First swipe' />
                  <Image className='images' src={BannerImg2} alt='Second swipe' />
                  <Image className='images' src={BannerImg3} alt='Third swipe' />
                  <Image className='images' src={BannerImg4} alt='Fourth swipe' />
                  </Slider>
                </div>
                <h3 className='text-primary text-start py-5 px-5'>MY EXPRIENCE IS GROWING DAY BY DAY</h3>
              </div>
            </div>
          </div>
        </section>
        <section className='banner bg-binary py-5'>
          <div className='container'>
            <div className='row'>
              <h1 className='text-primary head-1 py-3 px-4'>LATEST <span className='outline'>PROJECT</span></h1>
              <hr className='line mx-4' />
              <Carousel>
                <Carousel.Item>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg1} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg2} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg3} alt='landImg' />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg4} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg5} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg6} alt='landImg' />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg7} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg8} alt='landImg' />
                  </div>
                  <div className='col-lg-4 py-5 figure'>
                    <Image className='cardImg' src={LandingImg9} alt='landImg' />
                  </div>
                </Carousel.Item>         
              </Carousel>
              <h3 className='text-primary text-end py-3 px-5'>AWESOME <br /><span className='head2'>DESIGN</span></h3>
            </div>
          </div>
        </section>
        <section className='blog bg-back py-5'>
          <div className='container'>
            <div className='row'>
              <div>
              <h1 className='text-primary head-1'>LATEST <span className='outline'>BLOG</span></h1>
              <hr className='line mx-2' />
              </div>
                           
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg1} alt='Blog Img1' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg2} alt='Blog Img2' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg3} alt='Blog Img3' />
              </div>

              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg4} alt='Blog Img4' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg5} alt='Blog Img5' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg6} alt='Blog Img6' />
              </div>

              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg7} alt='Blog Img7' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image className='feature' src={BlogImg8} alt='Blog Img8' />
              </div>
              <div className='col-lg-4 py-2 feature'>
              <Image src={BlogImg9} alt='Blog Img9' />
              </div>

              <h3 className='text-primary text-end'>BLOG <br/><span className='head2'>POST</span></h3>
              <div className='sliders'>
              <div className='sliders-track'>
                <div className='slides'>
                <Image className='logo' src={LogoImg1} alt='LogoImg1' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg2} alt='LogoImg2' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg3} alt='LogoImg3' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg4} alt='LogoImg4' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg5} alt='LogoImg5' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg6} alt='LogoImg6' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg7} alt='LogoImg7' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg8} alt='LogoImg8' /> 
                </div>

                <div className='slides'>
                <Image className='logo' src={LogoImg1} alt='LogoImg1' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg2} alt='LogoImg2' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg3} alt='LogoImg3' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg4} alt='LogoImg4' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg5} alt='LogoImg5' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg6} alt='LogoImg6' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg7} alt='LogoImg7' />
                </div>
                <div className='slides'>
                <Image className='logo' src={LogoImg8} alt='LogoImg8' /> 
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section className='landing bg-room py-5'>
          <div className='container'>
            <div className='row'>
              <h2 className='text-light text-center head-1 py-3'>ACHIVEMENTS</h2>
              <p className='text-light text-center headpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <div className='col-lg-4'>
                <h1 className='text-light headnum'><CountUp start={0} end={100}  duration={2.75} /></h1>
                <h4 className='text-light headroom'>Projects</h4>
              </div>
              <div className='col-lg-4'>
                <h1 className='text-light headnum'><CountUp start={0} end={100} duration={2.75} /></h1>
                <h4 className='text-light headroom1'>Clients</h4>
              </div>
              <div className='col-lg-4'>
                <h1 className='text-light headnum'><CountUp start={0} end={200} duration={2.75} /></h1>
                <h4 className='text-light headroom2'>Days</h4>
              </div>
            </div>
          </div>
        </section>
        <section className='wapper py-5'>
          <div className='container'>
            <div className='row'>
              <h1 className='text-primary text-start head-1'>TESTIMONIAL</h1>
              <hr className='line mx-4' />
              <Carousel>
                <Carousel.Item>
                  <div className='d-flex justify-content-center align-items-center'>
                  <div className='card my-5'>
                  <h5 className='text-primary text-center cardhead py-3'>Classic</h5>
                  <p className='text-primary text-center cardpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center align-items-center'>
                  <div className='card my-5'>
                  <h5 className='text-primary text-center cardhead py-3'>Classic</h5>
                  <p className='text-primary text-center cardpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className='d-flex justify-content-center align-items-center'>
                  <div className='card my-5'>
                  <h5 className='text-primary text-center cardhead py-3'>Classic</h5>
                  <p className='text-primary text-center cardpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center align-items-center'>
                  <div className='card my-5'>
                  <h5 className='text-primary text-center cardhead py-3'>Classic</h5>
                  <p className='text-primary text-center cardpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center align-items-center'>
                  <div className='card my-5'>
                  <h5 className='text-primary text-center cardhead py-3'>Classic</h5>
                  <p className='text-primary text-center cardpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  </div>
                </Carousel.Item>
              </Carousel>
              <div>
                <h2 className='text-primary text-end py-4'>CLIENT <br/><span className='head2'>SAY</span></h2>
              </div>
            </div>
          </div>
        </section>
        <section className='footer bg-room py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <Image className='footerLogo' src={FooterLogo} alt='Footer Logo' />
                <ul className='py-4'>
                <i className='bi bi-whatsapp' ></i>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-linkedin'></i>
                <i className='bi bi-facebook'></i>
                </ul>
              </div>
              <div className='col-lg-4'>
              <h4 className='text-light'>QUICK LINKS</h4>
                <ul className='links'>
                  <li><a className='foot-links' href='#about'>About</a></li>
                  <li><a className='foot-links' href='#contact'>Contact</a></li>
                  <li><a className='foot-links' href='#faqs'>FAQs</a></li>
                  <li><a className='foot-links' href='#pb'>Privace & Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home
