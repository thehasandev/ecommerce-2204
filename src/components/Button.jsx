function Button({text,className,hover}) {
  return (
    <button className={`px-14 py-4  text-sm font-bold font-dm  border border-primary  ${hover ? "hover:bg-white hover:text-primary text-white bg-primary" : "bg-white text-primary hover:bg-primary hover:text-white"}  duration-500 } m-10  ${className}`}>{text}</button>
  )
}

export default Button