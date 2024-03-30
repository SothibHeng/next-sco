import { Metadata } from "next";
import React from "react";

// export const metadata: Metadata = {
//   title:
//    "ISTAD E-Commerce",
//   description:
//    "We are providing the best service for you!",
//   openGraph: {
//     title:
//      "ISTAD E-Commerce",
//     description:
//      "We are providing the best service for you!",
//     images: ""
//   },
// };
export const metadata: Metadata = {
	title: "ISTAD Ecommerce About Us",
	description: "We are providing the best service for you!",
}

export default function page() {
  return (
    <div className="h-screen grid place-content-center text-6xl">
      About Page
    </div>
  );
}
