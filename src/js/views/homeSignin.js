import React from "react";
import Hero from "../component/homesignin/hero";
import Products from "../component/homesignin/products/index";
import { ProductsData } from "../component/homesignin/products/data";
import { BrowserRouter as Router } from "react-router-dom";
const HomeSignin = () => {
	return (
		<>
			<Router>
				<Hero />
				<Products heading=" escoge tus productos" data={ProductsData} />
			</Router>
		</>
	);
};
export default HomeSignin;
