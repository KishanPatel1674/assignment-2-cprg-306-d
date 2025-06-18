import React from "react";
import "../styles/globals.css"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ marginTop: "30px", textAlign: "center" }}>
          <p>New Generation High School &copy; 2025</p>
        </footer>
      </body>
    </html>
  );
}
