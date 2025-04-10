import { NavBarDesktop } from "./NavbarDesktop";
import { NavBarMobile } from "./NavbarMobile";

export function NavBar() {
  return (
    <nav>
      <div className="hidden md:block mx-auto">
        <NavBarDesktop />
      </div>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
    </nav>
  )
}