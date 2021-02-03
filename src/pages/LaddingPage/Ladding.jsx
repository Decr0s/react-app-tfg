import React from 'react'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './ladding.css';
import illustration from '../../assets/images/Header/illustration.png';
import search_doctor from '../../assets/images/Services/search_doctor.png';
import pain from '../../assets/images/Services/pain_.png';
import paper from '../../assets/images/Services/paper.png';
import info from '../../assets/images/Services/info.png';
import emergencia from '../../assets/images/Services/emergencia.png';
import track from '../../assets/images/Services/track.png';
import imageLeft from '../../assets/images/Download/trafalgar-illustration sec02 1.png';
import imageRight from '../../assets/images/Download/trafalgar-illustration sec03 1.png';
import article01 from '../../assets/images/Articles/article01.png';
import article02 from '../../assets/images/Articles/article02.png';
import article03 from '../../assets/images/Articles/article03.png';
import item00 from '../../assets/images/carousel/img00.png';

import bg_left from '../../assets/images/items/bg_left.png';
import bg_right from '../../assets/images/items/bg_right.png';
import element from '../../assets/images/items/element.png';

export default function Ladding() {
    return (
        <>
            <div className="app__container">
                <Header />
                <div className="home__section">
                    <div className="home__left">
                        <h1>Virtual healthcare <br />for you</h1>
                        <p>Trafalgar provides progressive, and affordable<br />
                        healthcare, accessible on mobile and online<br />
                    for everyone</p>

                        <a className="btn-primary" href="#">Consult today</a>
                    </div>
                    <div className="home__right">
                        <img src={illustration} alt="img right" />
                    </div>
                </div>

                <div className="service__section">

                    <div className="service__title">
                        <h1>Our Services</h1>
                        <div className="service__divider"></div>
                        <div className="service__text">
                            <p>
                                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br />
                            with our highly qualified doctors you can consult with us which type of service is suitable for your health
                            </p>
                        </div>
                    </div>

                    <div className="service__content">
                        <div className="services">
                            <img src={search_doctor} className="service__logo" alt="search_doctor" />
                            <span className="serivce__title">Search Doctor</span>
                            <p>
                                Choose your doctor from thousands <br />
                                of specialist, general, and trusted <br />
                                hospitals
                                </p>
                        </div>

                        <div className="services">
                            <img src={pain} className="service__logo" alt="pain" />
                            <span className="serivce__title">Online Pharmacy</span>
                            <p>
                                Buy  your medicines with our<br />
                                mobile application with a simple <br />
                                delivery system
                                </p>
                        </div>

                        <div className="services">
                            <img src={paper} className="service__logo" alt="paper" />
                            <span className="serivce__title">Consultation</span>
                            <p>
                                Free consultation with our trusted <br />
                                doctors and get the best <br />
                                recomendations<br />
                            </p>
                        </div>

                        <div className="services">
                            <img src={info} className="service__logo" alt="info" />
                            <span className="serivce__title">Details info</span>
                            <p>
                                Free consultation with our trusted <br />
                                doctors and get the best <br />
                                recomendations
                                </p>
                        </div>

                        <div className="services">
                            <img src={emergencia} className="service__logo" alt="emergencia" />
                            <span className="serivce__title">Emergency care</span>
                            <p>
                                You can get 24/7 urgent care for <br />
                                yourself or your children and your<br />
                                lovely family
                                </p>
                        </div>
                        <div className="services">
                            <img src={track} className="service__logo" alt="track" />
                            <span className="serivce__title">Tracking</span>
                            <p>
                                                Track and save your medical history <br />
                        and health data
                        </p>
                        </div>
                    </div>
                    <a className="btn-outline" href="#">Learn more</a>

                </div>
                
                <div className="download__section">
                    <div className="download__box">
                        <div className="box__left">
                            <img src={imageLeft} alt="download_left" />
                        </div>
                        <div className="box__right">
                            <h1>Leading healthcare <br />
                                providers</h1>
                            <div className="service__divider"></div>
                            <p>
                                Trafalgar provides progressive, and affordable <br />
                                healthcare, accessible on mobile and online for <br />
                                everyone. To us, it’s not just work. We take pride<br />
                                in the solutions we deliver
                    </p>
                            <a className="btn-outline" href="#">Learn more</a>
                        </div>
                    </div>

                    <div className="download__box">
                        <div className="box__left">
                            <h1>Download our <br />
                                mobile apps</h1>
                            <div className="service__divider"></div>
                            <p>
                                Our dedicated patient engagement app and<br />
                                web portal allow you to access information <br />
                                instantaneously (no tedeous form, long calls,<br />
                                or administrative hassle) and securely
                    </p>
                            <a className="btn-outline" href="#">Download</a>

                        </div>
                        <div className="box__right">
                            <img src={imageRight} alt="download_right" />
                        </div>
                    </div>

                </div>


                <div className="saying__section">

                    <div className="saying__carousel">
                        <div className="saying_header">
                            <h3>What our costumer are saying </h3>
                            <div className="service__divider"></div>
                        </div>

                        <div className="carousel">
                            <Carousel plugins={['arrows']}>
                                <div className="carousel_item">
                                    <div className="item__profile">
                                        <img src={item00} alt="profile" />
                                        <div className="profile_info">
                                            <p>Edward Newdate</p>
                                            <p>Founder circle</p>
                                        </div>
                                    </div>
                                    <div className="depo_profile">
                                        <p>
                                            “Our dedicated patient engagement app and<br />
                                    web portal allow you to access information <br />
                                    instantaneously (no tedeous form, long calls,<br />
                                    or administrative hassle) and securely”
                                    </p>
                                    </div>
                                </div>
                                <div className="carousel_item">
                                    <div className="item__profile">
                                        <img src={item00} alt="profile" />
                                        <div className="profile_info">
                                            <p>Edward Newdate</p>
                                            <p>Founder circle</p>
                                        </div>
                                    </div>
                                    <div className="depo_profile">
                                        <p>
                                            “Our dedicated patient engagement app and<br />
                                    web portal allow you to access information <br />
                                    instantaneously (no tedeous form, long calls,<br />
                                    or administrative hassle) and securely”
                                    </p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>


                <div className="article__section">
                    <h1>Check out our latest article</h1>
                    <div className="service__divider"></div>
                    <div className="articles">

                        <div className="article">
                            <img src={article01} alt="artigos" />
                            <span className="article__title">
                                Disease detection, check <br />
                            up in the laboratory
                            </span>
                            <p>
                                In this case, the role of the health<br />
                             laboratory is very important to do<br />
                            a disease detection...
                            </p>
                            <a className="a-blue">Read more</a>
                        </div>

                        <div className="article">
                            <img src={article02} alt="artigos" />
                            <span className="article__title">
                                Herbal medicines that are <br />
                            safe for consumption
                            </span>
                            <p>
                                Herbal medicine is very widely used <br />
                            at this time because of its very good <br />
                            for your health...
                            </p>
                            <a className="a-blue">Read more</a>
                        </div>

                        <div className="article">
                            <img src={article03} alt="artigos" />
                            <span className="article__title">
                                Natural care for healthy <br />
                            facial skin
                            </span>
                            <p>
                                A healthy lifestyle should start from <br />
                            now and also for your skin health.<br />
                            There are some...
                            </p>
                            <a className="a-blue">Read more</a>
                        </div>
                    </div>

                    <a className="btn-outline" href="#">View all</a>
                </div>
            </div>
            <Footer />
        </>
    )
}
