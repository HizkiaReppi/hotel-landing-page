import HotelImage from '../assets/images/hero/hotel.png';
import IconWatch from '../assets/images/hero/icon-watchvideo.svg';
import IconPerson from '../assets/images/hero/icon-person.svg';
import IconLocation from '../assets/images/hero/icon-location.svg';
import IconCheckInOut from '../assets/images/hero/icon-checkinout.svg';
import "./herosection.css";

const HeroSection = () => {
  return (
    <>
      <div className='container hero-section mx-auto'>
        <div className='columns-2'>
          <div className='hero-left p-14'>
            <h1 className='hero-title text-6xl font-semibold mt-3'>Find your perfect place to stay</h1>
            <p className='hero-description text-xl leading-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto illum aliquid delectus accusantium facilis culpa </p>
            <div className='flex justify-start items-center mt-12'>
              <button className='hero-cta mr-4'>
                <img src={IconWatch} alt="Watch Video Icon" />
              </button>
              <div className='text-xl font-semibold'>Watch video</div>
            </div>
          </div>
          <div className='hero-right'>
            <img src={HotelImage} alt="Hotel image"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
