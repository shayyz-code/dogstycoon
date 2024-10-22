"use client";

import { navlinks } from "@/utils/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pn = usePathname();
  const [pathname, setPathname] = useState<string>(pn);
  useEffect(() => {
    setPathname(pn);
  }, [pn]);
  return (
    <nav className="flex items-start pt-2 pb-7 justify-evenly h-full">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.href}
          href={navlink.href}
          className={`flex flex-col justify-center items-center w-[60px] h-[60px] rounded-lg`}
        >
          <div
            className={`flex flex-col items-center hover:scale-110 transition-all ease-out ${
              pathname === navlink.href
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {pathname === navlink.href ? (
              <navlink.iconSolid />
            ) : (
              <navlink.icon />
            )}
            <span className="text-sm">{navlink.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
