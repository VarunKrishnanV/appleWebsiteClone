import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

function Hero() {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 3
        })

        gsap.to("#cta", {
            opacity: 1,
            y: 0,
            delay: 3
        })
    }, [])

    const handleVideoSrc = (() => {
        if (window.innerWidth > 760) {
            setVideoSrc(heroVideo)
        } else {
            setVideoSrc(smallHeroVideo)
        }
    })

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc)

        return (() => {
            window.removeEventListener('resize', handleVideoSrc)
        })
    }, [])

    return (
        <section className="w-full realtive nav-height mt-10">
            <div className="h-5/6  w-full  flex-center flex-col ">
                <h1 id="hero" className="hero-title">iPhone 15 Pro</h1>

                <div className="md:w-10/12 w-8/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div
                    id="cta"
                    className="flex flex-col items-center opacity-0 translate-y-20"
                >
                    <a href="#highlights" className="btn">Buy</a>
                    <p className="font-normal text-xl">From $100/month or $999</p>
                </div>


            </div>

        </section>
    )
}

export default Hero