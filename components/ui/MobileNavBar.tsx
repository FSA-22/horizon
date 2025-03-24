"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavBar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="right" className="border-none bg-white w-[400px]">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="horizon logo"
            />
            <h1 className="text-[26p]x font-ibm-plex-serif font-bold text-black">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map(({ imgURL, route, label }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={imgURL}
                        key={label}
                        className={cn("sidebar-link", {
                          "bg-blue-400": isActive,
                        })}>
                        
                          <Image
                            src={imgURL}
                            alt={label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        
                        <p
                          className={cn(" text-16 text-black-2 font-semibold mobilenav-sheet_close w-full", {
                            "text-white": isActive,
                          })}>
                          {label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}

                USER
              </nav>
            </SheetClose>

            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavBar;
