import { CTA } from "@/ui/CTA";
import { Typography } from "@/ui/Typography";
import { Container } from "../container/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Menu_Link } from "@/utils/menu_data/Menu_Link";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

export const Top_Navigation_Bar = () => {
  const [menu_data] = useState(Menu_Link);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <Container className="flex border-b w-full h-max items-center justify-between">
      {/* LOGO PART */}
      <div
        className="relative cursor-pointer flex w-full items-center justify-start h-full"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo/SaveYourBuddy_Logo.svg"
          alt="logo"
          width={75}
          height={75}
          className="absolute object-cover"
        />
      </div>
      {/* MENU LINK PART */}
      <div className="hidden md:flex gap-3 w-full items-center justify-center">
        {menu_data.map((link, index) => (
          <Typography key={index} balise="a" mirror="h4" href={link.link}>
            {link.nom}
          </Typography>
        ))}
      </div>
      {/* CTA PART */}
      <div className="flex w-full gap-3 items-center justify-end">
        <CTA variant="primary" rounded="full" href="/routes/reservation">
          Réserver
        </CTA>
        <CTA
          variant="primary"
          rounded="full"
          href="mailto:we.are.studio@gmail.com"
          className="hidden md:block"
        >
          Contact
        </CTA>
        <RxHamburgerMenu
          className="md:hidden cursor-pointer"
          size={30}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="hidden md:block bg-gray-500 max-w-8 w-full h-8"></div>
      </div>
      <div
        className={clsx(
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "transition-all duration-200 ease-in-out fixed bg-[#2caaff] z-35 top-0 left-0 h-screen w-full"
        )}
      >
        <IoCloseOutline
          className="absolute top-5.5 right-6 md:hidden cursor-pointer"
          size={34}
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* MENU LINK PART */}
        <div className="gap-8 w-full h-screen grid place-content-center">
          {menu_data.map((link, index) => (
            <Typography
              key={index}
              balise="a"
              mirror="h2"
              color="white"
              href={link.link}
            >
              {link.nom}
            </Typography>
          ))}
        </div>
      </div>
    </Container>
  );
};
