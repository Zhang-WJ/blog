import Header from "../components/head.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"

export default function()  {
  return (
     <div class="max-w-screen-lg mx-auto my-5">
       <div class="grid gap-x-5 gap-y-10 grid-cols-desktop grid-flow-col auto-rows-min">
         <div
             class="flex flex-col"
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
             class="flex justify-between gap-[10rem]"
         >
           <div class="">
             <h1>WeiJun Zhang</h1>
             <h2 class="my-1">FrontEnd Web Developer</h2>
             <p class="whitespace-pre-wrap">
               Gude! Ich bin am 29.01.1996 in Aschaffenburg geboren und bin dabei,
               das Internet schöner und schneller zu machen. Lebe in Köln-Ehrenfeld,
               studiere wieder in Aachen und arbeite momentan bei ShiftDigital.
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
       </div>
     </div>
  )
}

