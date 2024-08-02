import React from "react";
import { Route, Routes as Rt } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import LoginPage from "../components/Login";
import PlantPage from "../components/PlantPage";
import ProductListingPage from "../components/ProductListingPage";
import Profile from "../components/Profile";
import AboutUs from "../components/AboutUs";
import RegisterPage from "../components/Register";
import BuildYourOwnPlant from "../components/BuildYourOwnPlant/BuildYourOwnPlant";

const Routes = () => {
  return (
    <Rt>
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/plant-details" element={<PlantPage />} />
      <Route path="/build-plant" element={<BuildYourOwnPlant />} />
    </Rt>
  );
};

export default Routes;
