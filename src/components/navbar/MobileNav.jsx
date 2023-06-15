import { nav } from "../../data/nav";

function MobileNav() {
  return (
    <div className="w-full h-full bg-violet-light">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={name}>
              <a className="link text-white-white text-xl" href={href}>
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="inline-block rounded-full bg-gray-100 border-2  border-yellow-500 px-8 py-4 text-sm font-medium text-black transition hover:text-white hover:bg-gradient-to-r from-orange-home8 to-yellow-home8 capitalize"
          >
            Sign In
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-gradient-to-r from-orange-home8 to-yellow-home8 px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
      </ul>
    </div>
  );
}

export default MobileNav;
