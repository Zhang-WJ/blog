import IconSmartHome from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/smart-home.tsx"
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
      <div class="bg-green-200 w-full py-6 px-4">
        <div class="max-w-screen-md flex md:flex-col gap-4 mx-auto">
          <div className="flex items-center flex-1">
            <IconSmartHome aria-hidden="true" />
            <div className="text-2xl  ml-1 font-bold">
              X-writing
            </div>
          </div>
          <ul className="flex items-center gap-6">
            {menus.map((menu) => (
                <li>
                  <a
                      href={menu.href}
                      className={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                          (menu.href === active ? " font-bold border-b-2" : "")}
                  >
                    {menu.name}
                  </a>
                </li>
            ))}
            <li>
              <div className="text-gray-500 space-y-2">
                <a
                    href="https://github.com/Zhang-WJ"
                    className="inline-block hover:text-black"
                    aria-label="GitHub"
                >
                  <BrandGithub aria-hidden="true" />
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>
  );
}
