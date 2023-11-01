import LeftArrow from "./Icon/LeftArrow"

function PrevSlide(props) {
  const {onClick} = props
  return (
      <div
        className={`lg:w-16 lg:h-16 w-8 h-8 rounded-[5px] lg:rounded-full flex justify-center items-center bg-[#979797] ${props.class}`}
        onClick={onClick}
      >
        <LeftArrow/>
      </div>
  )
}

export default PrevSlide