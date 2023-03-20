import { useState } from "react"
import Button from "./Button"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './locationsection.css';

const Location = () => {
  const [email, setEmail] = useState('')
  const position = [51.505, -0.09];
  return (
    <>
      <div className="md:container md:mx-auto mt-40 max-md:mt-16">
        <h2 className="leading-[50px] text-[24px] font-semibold max-md:mx-10 max-md:mb-4 md:hidden">Location of our Hotels</h2>
        <div className="location-map relative w-full h-[600px] rounded-2xl overflow-hidden max-md:rounded-none max-md:h-[400px]">
          {/* <div className="absolute left-0 top-0 z-10"> */}
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-[600px] absolute">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          {/* </div> */}
        </div>
        <div className="location-box relative z-[401] max-md:hidden ">
          <div className="absolute bg-white mx-11 rounded-2xl gap-28 flex p-11 bottom-[30px]">
            <div className="location-box-left w-1/2">
              <h2 className="leading-[50px] text-[40px] font-semibold">Location of our Hotels</h2>
              <p className="mt-5 text-[16ox] text-[#555555] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            <div className="location-box-right w-1/2 flex items-end max-lg:flex-col ">
              <div className="flex justify-between w-full bg-[#FAFAFA] rounded-[50px] ">
                <div className="px-8 py-4 text-[16ox] text-[#555555] leading-7 w-full">
                  <input type="text" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button addClass={'rounded-[50px] px-12 max-lg:hidden'}>Contact</Button>
              </div>
              <Button addClass={'rounded-[50px] px-12 lg:hidden max-lg:mt-5'}>Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location