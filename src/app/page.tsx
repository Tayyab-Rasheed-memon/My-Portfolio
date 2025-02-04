"use client";

import React from "react";
import ProfileSection from "./components/ProfileSection"; // Assuming you have this component

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProfileSection />
    </div>
  );
};

export default HomePage;
