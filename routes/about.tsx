import Header from "../components/head.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"

export default function () {
  return (
      <>
        <Header active={'/about'}/>

        <div class="max-w-screen-md mx-auto my-5">
          <div class="grid gap-x-5 gap-y-10 grid-cols-desktop">
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
                class="flex justify-between gap-[10rem] items-center"
            >
              <div class="">
                <h1>WeiJun Zhang</h1>
                <h2 class="my-1">FrontEnd Web Developer</h2>
                <p class="whitespace-pre-wrap">
                  I entered in the world of the programming when I found this should be my whole life to get in.
                  Keep learning, work on a workshop in southwest of China
                </p>
              </div>
              <img
                  class="rounded-full flex-shrink-0"
                  src="https://avatars.githubusercontent.com/u/37130869?v=4"
                  height="150"
                  width="150"
                  alt="Portrait von Max Schmidt"
              />
            </div>

            <h3>EDUCATION</h3>
            <div className="space-y-3 lg:space-y-2">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h4>Hainan Tropical Ocean University</h4>
                  <p>Seq, 2008 - Jun, 2012 </p>
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

