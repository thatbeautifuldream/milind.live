import { TypeAnimation } from "react-type-animation"

const TypeAnimationSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        "Building better web applications",
        1000,
        "Building better mobile applications",
        1000,
        "Building better performing backend systems",
        1000,
        "Building better web experiences ✨",
        2000,
      ]}
      wrapper="strong"
      speed={50}
      style={{
        display: "inline-block",
        fontSize: "1.5rem",
      }}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationSequence
