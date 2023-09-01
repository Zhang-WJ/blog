import Header from "../components/head.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"

export default function () {
  return (
      <>
        <Header active={'/about'}/>

        <div class="max-w-screen-lg mx-auto my-5 px-4">
          <div class="grid gap-x-5 gap-y-10 grid-cols-desktop lg:grid-cols-1 lg:gap-y-0">
            <div
                class="flex flex-col items-end"
            >
              <a
                  href="/cv-de.pdf"
                  target="_blank"
                  class='h-[40px] w-[40px] p-[5px] border-2 hover:border-gray-light bg-gray-dark rounded-xl'
              ><img
                  src="cv.svg"
                  width="16"
                  height="16"
                  class="w-full h-full transition-colors duration-150"
                  alt="CV"
              />
              </a>
            </div>

            <div
                class="flex md:flex-col md:items-start md:gap-y-3 justify-between gap-[10rem] items-center"
            >
              <div class="md:order-2">
                <h1>WeiJun Zhang</h1>
                <h2 class="my-1">FrontEnd Web Developer</h2>
                <p class="whitespace-pre-wrap">
                  I entered in the world of the programming when I found this should be my whole life to get in.
                  Keep learning, work on a workshop in southwest of China
                </p>
              </div>
              <img
                  class="rounded-full flex-shrink-0 md:order-1 md:w-20"
                  src="https://avatars.githubusercontent.com/u/37130869?v=4"
                  height="150"
                  width="150"
                  alt="Portrait von Max Schmidt"
              />
            </div>

            <h3 class="lg: mt-8">EDUCATION</h3>
            <div className="space-y-3 lg:space-y-2">
              <div>
                <div className="flex justify-between items-center md:items-start md:mb-2 mb-8 md:flex-col">
                  <h4 className="md:order-2">Hainan Tropical Ocean University</h4>
                  <p className="md:order-1 md:mb-[8px]">Seq, 2008 - Jun, 2012 </p>
                </div>
                <p className="whitespace-pre-wrap">
                  Focus: Network Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

  )
}

