import LeftArrow from "./Icon/LeftArrow"

function PrevSlide(props) {
  const {onClick} = props
  return (
      <div
        className={`w-16 h-16 rounded-full flex justify-center items-center bg-[#979797] ${props.class}`}
        onClick={onClick}
      >
        <LeftArrow/>
      </div>
  )
}

export default PrevSlide