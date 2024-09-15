import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { FavoriteDropdown } from "./FavoriteDropdown";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<div>
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254 text-warning"
					className="logo ms-5" alt="logo-img" />
			</div>
			<FavoriteDropdown />
		</nav>
	);
};