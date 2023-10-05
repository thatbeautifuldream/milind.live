import React from "react"
import Image from "next/image"
import maaPapa from "../public/images/maa_papa.jpg"
import popularKid from "../public/images/popular_kid.jpg"
import naniMaa from "../public/images/nani_maa.jpg"
import maaBeta from "../public/images/maa_beta.jpg"
import nanaJiKeSaath from "../public/images/nanaji_ke_saath.jpg"
import sleepingBoy from "../public/images/sleeping_boy.jpg"
import mastikhor from "../public/images/mastikhor.jpg"
import grownUpMilind from "../public/images/grown_up_milind.jpg"

const photosData = [
  {
    title: "Maa aur Papa",
    imageSrc: maaPapa,
    description:
      "My father unfortunately isn't alive and this is one of the few photos I have of my parents together 💞",
  },
  {
    title: "Popular Colony Kid",
    imageSrc: popularKid,
    description:
      "But fortunately, people around me never let me feel the absence of him 🥹",
  },
  {
    title: "Nani aur Maa",
    imageSrc: naniMaa,
    description:
      "And always been loved by my two mothers, my nani and my maa 🙏",
  },
  {
    title: "Maa ka Pyar",
    imageSrc: maaBeta,
    description:
      "My mother has a disability to hear but has never been less of a mother because of that, always taken care of me 💖",
  },
  {
    title: "Nana Ji ke saath",
    imageSrc: nanaJiKeSaath,
    description:
      "My Nana Ji taught me how to use a computer and ever since I've been a computer geek 🤓, I owe my career and all my success to my Nana Ji 🙏",
  },
  {
    title: "Sleeping Boy",
    imageSrc: sleepingBoy,
    description:
      "I've primarily been a lazy boy, here's an obvious picture of me being lazy 😜",
  },
  {
    title: "MastiKhor",
    imageSrc: mastikhor,
    description: "I'm very fun at heart & a true mastikhor 😁",
  },
  {
    title: "Grown up Milind",
    imageSrc: grownUpMilind,
    description:
      "Growing up is not fun, but I am owning up to my responsibilities with time, working my way up, being the man I've set out to be.",
  },
]

const PhotosComponent = () => {
  return (
    <div>
      {photosData.map((photo, index) => (
        <div key={index}>
          <h3>{photo.title}</h3>
          <blockquote>{photo.description}</blockquote>
          <a title={photo.title} className="figure">
            <Image
              style={{
                margin: "0 auto",
              }}
              src={photo.imageSrc}
              alt={photo.title}
              placeholder="blur"
            />
          </a>
        </div>
      ))}
      <p style={{ textAlign: "right" }}>
        <a
          href="https://instagram.com/thatbeautifuldream"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Photo Diary ↗
        </a>
      </p>
    </div>
  )
}

export default PhotosComponent
