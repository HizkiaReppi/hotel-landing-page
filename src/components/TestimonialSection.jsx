import { IconQuatitationMarkClosed, IconQuatitationMarkOpen } from "../assets/icons"
import { ImagePerson } from "../assets/images"
import './testimonialsection.css'

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section container mx-auto bg-[#FAFAFA] flex mt-32 rounded-2xl">
        <div className="testimonial-left my-16 mx-24 ">
          <p className="relative leading-[28px] text-[#555555]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <img className="absolute top-[0] left-[-6%]" src={IconQuatitationMarkOpen} alt="IconQuatitationOpen" />
            <img className="absolute bottom-[0] right-[-4%]" src={IconQuatitationMarkClosed} alt="IconQuatitationClosed" />
          </p>

          

          <div className="font-semibold text-2xl mt-14">
            Alexandr Ivchenko
          </div>
          <div className="text-[#555555] mt-3">
            Businessman
          </div>
        </div>
        <div className="testimonial-right flex-none h-[400px] w-[400px]">
          <img src={ImagePerson} className="object-cover" alt="Testimonial Image"/>
        </div>
      </div>
    </>
  )
}

export default Testimonial