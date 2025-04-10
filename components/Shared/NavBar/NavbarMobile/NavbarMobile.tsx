import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";
import { BellRing, Menu, Search } from "lucide-react";

import { Logo } from "@/components/Shared/Logo";
import { itemsNavbar } from "@/data/itemsNavbar";

export function NavBarMobile() {
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <Sheet>
        <SheetTrigger>
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <div className="flex flex-col gap-4 p-4">
            {itemsNavbar.map((item) => (
              <Link 
                key={item.name} 
                href={item.link}
                className="hover:text-gray-300 transition-all duration-300"
              > 
                {item.name} 
              </Link>
            ))}
          </div>
          <div className="border-[1px] border-white/30 my-5"/>
          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            {/* TODO: Add user profile */}
            <p>User</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}