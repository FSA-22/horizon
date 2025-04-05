import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer-name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer-email"}>
        <h1 className="text-14 truncate font-semibold text-gray-600">
          {user?.name}
        </h1>

        <p className="text-14 truncate font-normal text-gray-400">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" alt="logout" width={36} height={36} />
      </div>
    </footer>
  );
};

export default Footer;
