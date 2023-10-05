import LeftArrow from "./Icon/LeftArrow"

function PrevSlide({className,  onClick}) {
  return (
      <div
        className={`${className} absolute left-0 z-40 -translate-y-1/2 top-1/2  w-16 h-16 rounded-full flex justify-center items-center bg-[#979797]`}
        onClick={onClick}
      >
        <LeftArrow/>
      </div>
  )
}

export default PrevSlide