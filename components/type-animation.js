import { TypeAnimation } from "react-type-animation"

const TypeAnimationSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        "I build better web interfaces",
        1000,
        "I build better web services",
        1000,
        "I build better web applications",
        1000,
        "I build better web experiences ✨",
        2000,
      ]}
      speed={50}
      style={{
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationSequence
