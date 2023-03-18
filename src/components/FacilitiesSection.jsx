import { IconBreakfast, IconElectricity, IconExercise, IconOtherService, IconParkingArea, IconPrivateWorkspace, IconSwimmingpool, IconWifi } from "../assets/icons"
import Button from "./Button"
import './facilitiessection.css'

const Facilities = () => {
  const dynamicFacilitiesData = [
    {
      icon: IconPrivateWorkspace,
      title: "Private Workspace",
      link: null
    },
    {
      icon: IconParkingArea,
      title: "Parking Area",
      link: null
    },
    {
      icon: IconBreakfast,
      title: "Breakfast",
      link: null
    },
    {
      icon: IconWifi,
      title: "Free Wifi",
      link: null
    },
    {
      icon: IconElectricity,
      title: "Free Electricity",
      link: null
    },
    {
      icon: IconSwimmingpool,
      title: "Swimming Pool",
      link: null
    },
    {
      icon: IconExercise,
      title: "Exercise Space",
      link: null
    },
    {
      icon: IconOtherService,
      title: "Other Service",
      link: null
    },
  ]

  const FacilitiesBox = (props) => {
    return (
    <>
        <div className={`facilities-box flex justify-center items-center w-[193px] h-[193px] rounded-lg ${props.addClass}` }>
          <div className="">
            <img src={props.icon} className="mx-auto" alt={`${props.title} Icon`} />
            <p className="mt-6">{props.title}</p>
        </div>
      </div>
    </>)
  }

  return (
    <>
      <div className="container mx-auto flex mt-36">
        <div className="facilities-left w-2/6 h-full pr-8">
          <h2 className="leading-[50px] text-[40px] font-semibold">We do our best facilities provide you</h2>
          <p className="mt-5 text-[16ox] text-[#555555] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          <Button addClass={'mt-12 py-4 px-8 rounded-[36px]'}>
            Contact Now
          </Button>
        </div>
        <div className="facilities-right w-4/6 grid grid-cols-4 gap-4">
          {dynamicFacilitiesData.map((data, index) => {
            return <FacilitiesBox key={index} icon={data.icon} title={data.title} addClass=""/>
          })}
        </div>
      </div>

    </>
  )
}

export default Facilities