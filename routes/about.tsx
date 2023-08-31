import Header from "../components/head.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx"
export default function()  {
  return (
      <div >
        <Header active={'/about'} />
        <main class="max-w-screen-md px-4 mx-auto mt-8">
          <div class="mb-8">
            Some writing and just for learning
          </div>
          <div class="flex">
            My twitter: &nbsp;
            <a href="https://twitter.com/ing_cn_0"
               className="inline-block hover:text-black"
               aria-label="Twitter">
              <IconBrandTwitter />
            </a>
          </div>

        </main>
      </div>
  );
}

