"use client";

// import { cn } from "@/lib/utils";
import { Link } from "@radix-ui/themes";
import Image from "next/image";
import motipLogo from "@/public/logo.png";
import styles from "./Nav.module.scss";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import React from "react";

const navItems = [
  { text: "Strona główna", link: "/" },
  { text: "O nas", link: "/o-nas" },
  { text: "Produkty", link: "/produkty" },
  { text: "Partnerzy", link: "/partnerzy" },
  { text: "Certyfikaty", link: "/certyfikaty" },
  { text: "Porady", link: "/porady" },
  { text: "Blog", link: "/blog" },
  { text: "Kontakt", link: "/kontakt" },
];

export const Nav = () => {
  return (
    <nav className="w-screen flex justify-between gap-6 py-4 bg-green px-64">
      <Link href="/">
        <Image alt="Motip Logo" src={motipLogo} className="w-64" />
      </Link>
      <div className="flex gap-16 items-center text-2xl">
        {navItems.map(
          (item) =>
            (item.text != "Produkty" && (
              <Link
                className={`${styles.link} text-white `}
                key={item.text}
                href={item.link}
              >
                {item.text}
              </Link>
            )) || (
              <NavigationMenu key={item.link}>
                <NavigationMenuItem className="list-none">
                  <NavigationMenuTrigger className="text-white">
                    Produkty
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>chuj</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            )
        )}
      </div>
    </nav>
  );
};
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
