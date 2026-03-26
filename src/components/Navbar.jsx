import React from "react";
import { useTranslation } from "react-i18next";

import { BurgerMenu } from "./BurgerMenu";
import mainLogo from "assets/icons/mainLogo.svg";

export const Navbar = () => {
    const { t } = useTranslation();
    const linksKey = [
        { key: "catalog", route: "/catalog" },
        { key: "wholesale", route: "/wholesaleOffers" },
        { key: "services", route: "/services" },
        { key: "aboutCompany", route: "/aboutCompany" },
        { key: "reviews", route: "/reviews" },
        { key: "contacts", route: "/contacts" },
    ];

    return (
        <div className='navbar'>
            <img className='mainLogo' src={mainLogo} alt='mainLogo' />
            <ul>
                {linksKey.map((link) => (
                    <a key={link.key} href={`#${link.route}`}>
                        <li>{t([`header.navbarLinks.${link.key}`])}</li>
                    </a>
                ))}
            </ul>
            <BurgerMenu linksKey={linksKey} />
        </div>
    );
};
