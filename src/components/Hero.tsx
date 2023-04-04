import Link from "next/link"
import CircleButton from "./CircleButton"

const Hero = () => {
  return (
    <div className="
    flex
    flex-col
    lg:flex-row
    md:flow-row
    justify-between
    items-start
    p-5
    gap-1
    bg-lime-100
    rounded-2xl
    w-full
    h-screen
    ">
        <div className="
        flex
        flex-col
        justify-between
        items-start
        p-5
        md:gap-5
        gap-5
        lg:w-3/4
        md:w-3/4
        h-full
        ">
            <h1 className="lg:text-9xl md:text-8xl text-4xl font-black">
                Designer. <br /> Developer.
            </h1>

            <p className="lg:text-5xl md:text-3xl text-xl font-bold">
                Hi there! I'm Mirza Mahad Baig, I specialize in creating beautiful, user-centric websites and that are tailored to your needs.
            </p>
        </div>
        <div className="
        flex
        flex-col
        items-center
        justify-between
        p-5
        lg:w-1/4
        md:w-1/4
        h-full
        ">
            <CircleButton btnlink = "https://fwhdaueuzh6.typeform.com/to/IA75g8Dc" btntxt = "Let's Talk!" />
            <Link href={"https://www.linkedin.com/in/mahadbaig"}>Say hi on Linkedin</Link>
        </div>
    </div>
  )
}

export default Hero