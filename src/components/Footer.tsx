import Link from "next/link";
import Packages from "./Packages";

const Footer = () => {
  return (
    <div
      className="
    flex
    lg:flex-row
    flex-col
    items-start
    gap-4
    w-full
    "
    >
      <div
        className="
        flex
        flex-col
        items-start
        gap-4
        lg:w-3/4
        w-full
        h-full
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            p-5
            gap-4
            w-full
            bg-green-500
            rounded-2xl
            lg:h-3/5
            md:h-3/5
            "
        >
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
            Hey there!, I'm Mirza Mahad Baig, UX designer & Next.JS developer
            based in Karachi, Pakistan
          </h1>

          <h2 className="lg:text-4xl md:text-2xl text-xl font-medium">
            With over 3 years of experience as a brand designer, I bring a
            unique perspective.
          </h2>

          <p className="lg:text-xl md:text-base text-sm">
            Whether you are looking to refresh your existing website or create a
            new one from scratch. I'm here to help you along every step of the
            way. From strategy, to branding, to design, to developing and
            launching the final product.
          </p>
        </div>

        <div
          className="
            flex
            lg:flex-row
            md:flex-row
            flex-col
            items-start
            gap-4
            lg:h-2/5
            md:h-2/5
            w-full
            "
        >
          <Packages
            visibility2="hidden"
            visibility3="hidden"
            title="NextJS Development"
            desc="Have a design that is ready to build? Let's work on that!"
            price="$1,500"
          />

          <Packages
            visibility3="hidden"
            title="Design + Dev"
            desc="Want me to design too? No problem, Let's do that!"
            price="$2,500"
          />

          <Packages
            title="The Full Package"
            desc="No logo? Don't worry, I'll design all the assets too!"
            price="$5,000"
          />
        </div>
      </div>

      <div
        className="
        flex
        flex-col
        justify-between
        items-start
        p-5
        gap-4
        bg-blue-400
        lg:w-1/4
        w-full
        rounded-2xl
        h-80
        "
      >
        <h1 className="text-4xl font-bold">
            Ready To Elevate Your Business?
        </h1>

        <Link href={"https://fwhdaueuzh6.typeform.com/to/IA75g8Dc"} target="_blank" className="
        w-full
        bg-black
        text-white
        p-5
        rounded-2xl
        justify-center
        flex
        items-center
        text-2xl
        transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 duration-300
        ">
            Let's Talk    
        </Link>
      </div>
    </div>
  );
};

export default Footer;
