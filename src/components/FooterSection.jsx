import { data } from "autoprefixer"
import { IconFacebook, IconInstagram, IconGoogle } from "../assets/icons"
const Footer = () => {
  const dataLink = [
    [{
      title: "Home",
      isTop: true,
      link: null,
    },
      {
        title: "Booking",
        isTop: false,
        link: null,
      },
      {
        title: "Facilities",
        isTop: false,
        link: null,
      },
      {
        title: "Location",
        isTop: false,
        link: null,
      }, {
        title: "Contact",
        isTop: false,
        link: null,
      }],
    [{
      title: "About Us",
      isTop: true,
      link: null,
    },
      {
        title: "FAQs",
        isTop: false,
        link: null,
      },
      {
        title: "Facilities",
        isTop: false,
        link: null,
      },
      {
        title: "Help center",
        isTop: false,
        link: null,
      }, {
        title: "Privacy policy",
        isTop: false,
        link: null,
      }],
    [{
      title: "Get the app",
      isTop: true,
      link: null,
    },
      {
        title: "iOS app",
        isTop: false,
        link: null,
      },
      {
        title: "Android app",
        isTop: false,
        link: null,
      },],
  ]

  return (
    <>
      <div className="md:container md:mx-auto mt-36 max-md:mt-16 mb-20 max-md:mx-10 footer flex items-start md:flex-row flex-col">
        <div className="flex items-end flex-cols md:w-1/4 w-full">
          <div className="footer-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad quos explicabo perferendis rem minima non ea officiis nostrum, iure dolorem sequi placeat quis numquam eius? Ratione accusantium quia repellat?</p>
            <div className="flex gap-4 mt-8 max-md:items-center max-md:justify-center">
              <img src={IconFacebook} alt="Icon Facebook"/>
              <img src={IconInstagram} alt="Icon Instagram" />
              <img src={IconGoogle} alt="Icon Google" />
            </div>
          </div>
        </div>
        <div className="footer-list md:w-3/4 w-full max-md:mt-20">
          <div className="flex justify-center justify-self-center justify-items-center items-start">
          {dataLink.map((data, index) => {
            return <div className="w-1/2 md:w-1/3 text-center">
                  {data.map(dat => {
                    return <p className={`mb-4 text-base ${dat.isTop ? 'font-bold mb-6 text-2xl':''} `}>{dat.title}</p>
                  })}
                </div>
          })}
          </div>
        </div>
      </div>
    </>
  )
    
}

export default Footer