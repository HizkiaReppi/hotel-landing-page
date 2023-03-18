import { IconQuatitationMarkClosed, IconQuatitationMarkOpen } from "../assets/icons"
import { ImagePerson } from "../assets/images"
import './testimonialsection.css'
import Carousel from 'nuka-carousel';

const Testimonial = () => {
  const dynamicTestimonialsData = [
    {
      name: "Alexandr Ivchenko",
      job: "Businessman",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      photo: ImagePerson
    },
    {
      name: "Testing Little Bit",
      job: "ssssss",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      photo: ImagePerson
    },
    {
      name: "Testing Little Little Bit",
      job: "Entrepreneur",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      photo: ImagePerson
    }
  ]


  const Testimonial = (props) => {
    return (
      <>
        <div className="testimonial-left my-16 mx-24 ">
          <p className="relative leading-[28px] text-[#555555]">{props.comment}
            <img className="absolute top-[0] left-[-6%]" src={IconQuatitationMarkOpen} alt="IconQuatitationOpen" />
            <img className="absolute bottom-[0] right-[-4%]" src={IconQuatitationMarkClosed} alt="IconQuatitationClosed" />
          </p>
          <div className="font-semibold text-2xl mt-14">
            {props.name}
          </div>
          <div className="text-[#555555] mt-3">
            {props.job}
          </div>
        </div>
        <div className="testimonial-right flex-none h-[400px] w-[400px]">
          <img src={props.photo} className="object-cover" alt="Testimonial Image" />
        </div>
      </>
    )
  }


  return (
    <>
      <div className="testimonial-section container mx-auto bg-[#FAFAFA] flex mt-32 rounded-2xl">
        <Carousel>
          {dynamicTestimonialsData.map(data => {
            return <Testimonial {...data} />
          })}
        </Carousel>
      </div>
    </>
  )
}

export default Testimonial