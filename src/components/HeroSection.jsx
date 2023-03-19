import { ImageHotel } from '../assets/images';
import { IconSearch, IconCheckinout, IconLocation, IconPerson, IconWatchVideo } from '../assets/icons';
import "./herosection.css";
import Button from './Button';
import Select from 'react-select';
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const HeroSection = () => {
  const [location, setLocation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [roomFor, setRoomFor] = useState(null);

  const countryOptions= [
    { value: 'no-selected', label: 'Select...', isFixed: true },
    { value: 'losangles', label: 'Los Angles' },
    { value: 'bali', label: 'Bali'},
    { value: 'sydney', label: 'Sydney' },
    { value: 'lombok', label: 'Lombok' },
    { value: 'yogya', label: 'Yogyakarta' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'maldiv', label: 'Maldiv' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'tokyo', label: 'Tokyo' },
  ];

  const roomOptions = [
    { value: 'no-selected', label: 'Select...', isFixed: true },
    { value: '1room1guest', label: '1 room, 1 guest' },
    { value: '1room2guests', label: '1 room, 2 guests' },
    { value: '1room3guests', label: '1 room, 3 guest' },
    { value: '2room1guest', label: '2 room, 1 guest' },
    { value: '2room2guests', label: '2 room, 2 guests' },
    { value: '2room3guests', label: '2 room, 3 guests' },
  ];

  function onSearchButtonClick (event){
    const result = {
      location: location,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomFor: roomFor,
    }
    
    alert(JSON.stringify(result))
  }


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
        <div className="absolute right-0 left-0 mx-auto bottom-11 w-4/5">
          <div className='hero-option relative bg-white rounded-[280px] flex justify-between'>
            <div className='flex justify-between p-6 w-4/5 pl-8 z-1'>
              <div className='hero-location flex justify-start w-1/5'>
                <div>
                  <img src={IconLocation} className='mt-1 mr-2' alt="Location Icon" />
                </div>
                <div>
                  <div className='text-xl'>
                    Location
                  </div>
                  <div className='text-sm text-[#555555]'>
                    <Select
                      id='location-selector'
                      inputId='location-selector'
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={countryOptions[0]}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      name="color"
                      options={countryOptions}
                      onChange={(choice) => setLocation(choice)}
                    />
                  </div>
                </div>
              </div>
              <div className='vertical-line'></div>
              <div className='hero-checkin flex justify-start w-1/5'>
                <div>
                  <img src={IconCheckinout} className='mt-1 mr-5' alt="CheckIn Icon" />
                </div>
                <div>
                  <div className='text-xl'>
                    Check In
                  </div>
                  <div className='text-sm mt-[6px] text-[#555555]'>
                    <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
                  </div>
                </div>
              </div>
              <div className='vertical-line'></div>
              <div className='hero-checkout flex justify-start w-1/5'>
                <div>
                  <img src={IconCheckinout} className='mt-1 mr-5' alt="CheckOut Icon" />
                </div>
                <div>
                  <div className='text-xl '>
                    Check Out
                  </div>
                  <div className='text-sm mt-[6px] text-[#555555]'>
                    <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />
                  </div>
                </div>
              </div>
              <div className='vertical-line'></div>
              <div className='hero-roomsfor flex justify-start w-1/5'>
                <div>
                  <img src={IconPerson} className='mt-1 mr-2' alt="Rooms For Icon" />
                </div>
                <div>
                  <div className='text-xl'>
                    Rooms for
                  </div>
                  <div className='text-sm text-[#555555]'>
                    <Select
                      id='room-selector'
                      inputId='room-selector'
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={roomOptions[0]}
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      name="color"
                      options={roomOptions}
                      onChange={(choice) => setRoomFor(choice)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='hero-search flex justify-start relative z-3' onClick={onSearchButtonClick}>
              <Button addClass={'!rounded-[280px] flex justify-start items-center text-white text-xl !px-11'}>
                <img src={IconSearch} className="mr-2" alt="Search Icon" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default HeroSection
