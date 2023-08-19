import LeftArrow from "./Icon/LeftArrow"

function PrevSlide({className,  onClick}) {
  return (
      <div
        className={`${className}  w-16 h-16 rounded-full flex justify-center items-center bg-[#979797]`}
        onClick={onClick}
      >
        <LeftArrow/>
      </div>
  )
}

export default PrevSlide