import { ImageHotel } from '../assets/images';
import { IconSearch, IconCheckinout, IconLocation, IconPerson, IconWatchVideo } from '../assets/icons';
import "./herosection.css";
import Button from './Button';

const HeroSection = () => {
  return (
    <>
      <div className='hero-section container bg-[#f6fcf9] relative mx-auto mt-8'>
        <div className='columns-2'>
          <div className='hero-left p-14'>
            <h1 className='hero-title leading-[80px] text-6xl font-semibold mt-3'>Find your perfect place to stay</h1>
            <p className='hero-description text-xl text-[#555555] leading-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto illum aliquid delectus accusantium facilis culpa </p>
            <div className='flex justify-start items-center mt-12'>
              <button className='hero-cta h-10 w-10 bg-white rounded-[50%] mr-4'>
                <img src={IconWatchVideo} alt="Watch Video Icon" />
              </button>
              <div className='text-xl font-semibold'>Watch video</div>
            </div>
          </div>
          <div className='hero-right'>
            <img src={ImageHotel} alt="Hotel image"/>
          </div>
        </div>
        <div className='hero-option absolute right-0 left-0 mx-auto bottom-11 w-4/5 bg-white rounded-[280px] flex justify-between'>
          <div className='flex justify-between p-6 w-4/5 pl-8'>
            <div className='hero-location flex justify-start'>
              <div>
                <img src={IconLocation} className='mt-1 mr-2' alt="Location Icon" />
              </div>
              <div>
                <div className='text-xl'>
                  Location
                </div>
                <div className='text-sm mt-1 text-[#555555]'>
                  United States
                </div>
              </div>
            </div>
            <div className='vertical-line'></div>
            <div className='hero-checkin flex justify-start'>
              <div>
                <img src={IconCheckinout} className='mt-1 mr-2' alt="CheckIn Icon" />
              </div>
              <div>
                <div className='text-xl'>
                  Check In
                </div>
                <div className='text-sm mt-1 text-[#555555]'>
                  10 Jun 2021
                </div>
              </div>
            </div>
            <div className='vertical-line'></div>
            <div className='hero-checkout flex justify-start'>
              <div>
                <img src={IconCheckinout} className='mt-1 mr-2' alt="CheckOut Icon" />
              </div>
              <div>
                <div className='text-xl '>
                  Check Out
                </div>
                <div className='text-sm mt-1 text-[#555555]'>
                  15 Jun 2021
                </div>
              </div>
            </div>
            <div className='vertical-line'></div>
            <div className='hero-roomsfor flex justify-start'>
              <div>
                <img src={IconPerson} className='mt-1 mr-2' alt="Rooms For Icon" />
              </div>
              <div>
                <div className='text-xl'>
                  Rooms for
                </div>
                <div className='text-sm mt-1 text-[#555555]'>
                  1 room, 2 guests
                </div>
              </div>
            </div>
          </div>
          <div className='hero-search flex justify-start'>
            <Button addClass={'!rounded-[280px] flex justify-start items-center text-white text-xl !px-11'}>
              <img src={IconSearch} className="mr-2" alt="Search Icon" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection