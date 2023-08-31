import { ComponentChildren } from "preact";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  return (
      <footer class="w-full pt-10 pb-4">
        <div class="px-4 mx-auto max-w-screen-md">
          <div class="text-center">
            <p>© 2023 X-writing • <a class="hover:text-underline" href="https://github.com/Zhang-WJ/blog">View Source</a></p>
          </div>
        </div>
      </footer>
  );
}
