import './card.css'
import { IconStar, IconStarDisable } from '../assets/icons'
const Card = ({ addClass, star, title, image, caption, price }) => {
  return (
    <div className={`rounded-2xl bg-[#FAFAFA] flex flex-col ` + addClass}>
      <div className="image">
        <img className='object-cover w-full h-full' src={image} alt="Image Hotel 1" />
      </div>
      <div className="content mt-6 pb-9 pl-4 pr-4">
        <div className="caption text-[#24AB70] text-xs mb-2 font-semibold">{caption}</div>
        <div className="title text-2xl font-semibold">{title}</div>
        <div className="info flex mt-6 items-center gap-4">
          <div className="pay text-md">{price}</div>
          <div className='vertical-line'></div>
          <div className="flex">
            {
              [...Array(Math.floor(star))].map((e, i) => {
                return <img src={IconStar} alt="Icon Star"/>
              })
            }
            {
              [...Array(5-Math.floor(star))].map((e, i) => {
                return <img className='icon-star-disable' src={IconStarDisable} alt="Icon Star"/>
              })
            }

          </div>
          <div className="text-md">{star}</div>
        </div>
      </div>
    </div>
  )
}

export default Card