import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from './VideoCarousel';

function Highlights() {

    useGSAP(() => {
        gsap.to("#highlightsHeading", {
            y: 0,
            opacity: 1
        })

        gsap.to(".link", {
            y: 0,
            opacity: 1,
            stagger: .2
        })

    }, [])


    return (
        <section id="highlights" className="w-screen h-full common-padding overflow-hidden bg-zinc">
            <div className="screen-max-width md:flex flex-wrap items-center justify-between">
                <h1 id="highlightsHeading" className="section-heading  ">Get the highlights</h1>
                <div className="flex gap-5 flex-wrap ">
                    <p className="link">Watch the film
                        <img className="ml-2" src={watchImg} alt="Watch now" />
                    </p>
                    <p className="link">Watch the event
                        <img className="ml-2" src={rightImg} alt="Watch now" />
                    </p>
                </div>
            </div>

            <VideoCarousel />
        </section>
    )
}

export default Highlights