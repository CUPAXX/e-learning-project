import React, { Component } from 'react'
import logo from '../assets/logo.png'
import bgFeature from '../assets/bgFeature.png'
import Slider from 'react-slick'
import SliderInfoItem from '../components/SliderInfoItem'
import { Link } from 'react-scroll'

export default class LandingPages extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <section id="homeId" className="homeBg flex flex-col justify-center items-center  ">
        <div className="flex flex-col bg-black bg-opacity-70 gap-2 md:gap-4 lg:gap-8 items-center w-full py-4 md:py-5 lg:py-8">
          <div className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-7xl">E-Learning Cupaxx School</div>
          <Link activeClass="active"
          to="aboutId"
          spy={true}
          smooth={true}
          duration={100}
          className="bg-yellow-600 hover:bg-yellow-500 btn-login py-2 cursor-pointer px-6 md:px-8 lg:px-10 rounded-lg flex justify-center items-center text-white lg:text-base text-xs font-bold">Let&apos;s Start</Link>
        </div>
      </section>
      <section id="aboutId" className="flex flex-row justify-center items-center py-10 md:py-16 px-4 md:px-8 lg:px-14 gap-4 md:gap-7 lg:gap-10">
        <img src={logo} alt="image about" className=" w-5/12 lg:w-4/12" />
        <article className="flex flex-col gap-2 md:gap-5 md:pt-8">
          <h2 className=" text-2xl md:text-4xl font-bold text-yellow-600">About</h2>
          <p className=" max-w-sm md:max-w-md lg:max-w-lg font-semibold text-gray-700 text-justify md:text-base text-xs">Cupaxx Academy is an educational platform where students have access to pre-recorded material and, under patronage of teacher, study subject at any time convenient for them</p>
          <p className=" hidden md:flex max-w-sm md:max-w-md lg:max-w-lg font-semibold text-gray-700 text-justify">This system allows simplifying studying processes and monitors the students activity at all learning stages by parent control function</p>
          <p className=" hidden lg:flex max-w-sm md:max-w-lg font-semibold text-gray-700 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non. Consequat interdum varius sit amet. Auctor eu augue ut lectus arcu bibendum.</p>
        </article>
      </section>
      <section id="featureId" className="flex flex-row justify-center items-center py-10 md:py-16 px-6 md:px-8 xl:px-14 md:gap-2 lg:gap-10">
        <img src={bgFeature} alt="bg feature" className=" hidden md:flex md:max-w-xs lg:max-w-md"/>
        <article className="flex flex-col gap-5 md:gap-8">
          <h3 className="text-center text-2xl md:text-4xl font-bold text-yellow-600">Feature</h3>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className=" bg-yellow-600 md:h-8 h-6 md:w-8 w-6 md:text-base text-xs rounded-full flex justify-center items-center text-white font-bold text-md">1</div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold md:text-base text-sm">Easy To Use</h3>
              <p className=" md:text-base text-xs max-w-xs lg:max-w-md text-gray-700 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus.</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className=" bg-yellow-600 md:h-8 h-6 md:w-8 w-6 md:text-base text-xs rounded-full flex justify-center items-center text-white font-bold text-md">2</div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold md:text-base text-sm">Free Exams</h3>
              <p className="md:text-base text-xs max-w-xs lg:max-w-md text-gray-700 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac felis.</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className=" bg-yellow-600 md:h-8 h-6 md:w-8 w-6 md:text-base text-xs rounded-full flex justify-center items-center text-white font-bold text-md">3</div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold md:text-base text-sm">Downloadable Modul</h3>
              <p className="md:text-base text-xs max-w-xs lg:max-w-md text-gray-700 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu.</p>
            </div>
          </div>
        </article>
      </section>
      <section id="informationId" className=" bg-gray-50 rounded-lg mx-8 md:mx-14 my-10 md:my-20">
        <h2 className="text-center py-3 md:py-5 text-2xl md:text-4xl text-yellow-600 font-bold"> Information </h2>
        <Slider className="" {...settings}>
          <SliderInfoItem
            title="Pengumpulan Berkas Pendaftaran"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu."
            />
          <SliderInfoItem
            title="Jadwal Kelas"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            />
          <SliderInfoItem
            title="Pengumuman Libur"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          <SliderInfoItem
            title="Pengumpulan Berkas Pendaftaran"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu."
            />
          <SliderInfoItem
            title="Pengumpulan Berkas Pendaftaran"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu."
            />
        </Slider>
      </section>
      </div>
    )
  }
}
