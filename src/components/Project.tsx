import Image from "next/image"
import CircleButton from "./CircleButton"
import Category from "./Category"

const Project = (props:any) => {
    const img = props.img
    const title = props.title
    const btnlink = props.btnlink
    const btntxt = props.btntxt
    const desc = props.desc

  return (
    <div className="
    flex
    flex-col
    justify-between
    items-start
    p-5
    gap-1
    bg-white
    rounded-2xl
    my-5
    ">
        <div>
            <Image src={img} className="rounded-2xl" alt=""/>
        </div>

        <div className="
        flex
        lg:flex-row
        md:flex-row
        flex-col
        justify-between
        p-2
        w-full
        gap-4
        ">
            <div className="
            flex
            flex-col
            items-star
            gap-6
            lg:w-3/4
            md:w-3/4
            w-full
            ">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold">{title}</h1>

                <div className="
                flex
                flex-row
                items-start
                gap-2
                ">
                    <Category cat = "UI Design" />
                    <Category cat = "NextJS Development" />
                    <Category cat = "Branding" visibility = "hidden" />
                </div>

                <p className="lg:text-4xl md:text-3xl">
                    {desc}
                </p>
            </div>

            <div>
                <CircleButton btnlink = {btnlink} btntxt = {btntxt} />
            </div>
        </div>
    </div>
  )
}

export default Project