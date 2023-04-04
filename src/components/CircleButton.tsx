import Link from "next/link"

const CircleButton = (props:any) => {
    const btntxt  = props.btntxt
    const btnlink = props.btnlink
  return (
    <div>
                <Link href={btnlink} target="_blank" className="
                lg:text-4xl text-center
                flex
            flex-col
            justify-center
            items-center
            p-2
            rounded-full
            bg-black
            text-white
            lg:w-48
            lg:h-48
            md:w-24
            md:h-24
            w-24
            h-24
            transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-black duration-300
                ">
                    {btntxt}
                </Link>
            </div>
  )
}

export default CircleButton