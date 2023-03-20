import Card from "./Card"
import { ImageHotel1, ImageHotel2, ImageHotel3 } from "../assets/images" 

const PopularHotel = () => {
  const popularHotelData = [{
    image: ImageHotel1,
    title: "Danubius Hotel Regents Park",
    caption: "London NW8 7JT England",
    star: 4.8,
    price: "$200 Par Night",
    link: null
  }, {
      image: ImageHotel2,
    title: "The Resident Soho",
      caption: "London NW8 7JT England",
      star: 4.8,
      price: "$200 Par Night",
    link: null
    }, {
      image: ImageHotel3,
    title: "London Bridge Hotel",
      caption: "London NW8 7JT England",
      star: 4.8,
      price: "$200 Par Night",
    link: null
    }]

  return (
    <div className="md:container md:mx-auto mx-10 mt-36 max-md:mt-16">
      <h2 className="font-semibold text-4xl">Our most popular Hotels</h2>
      <div className="popular-head flex justify-between">
        <div className="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div>
          <button className="bg-[#E9F7F1] rounded-[280px] text-[#24AB70] px-6 py-2">
            View All
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-8">
        {popularHotelData.map((data, index)=> {
          return <Card addClass={'md:w-1/3'} {...data}  />
        })}
      </div>
    </div>
  )
}

export default PopularHotel