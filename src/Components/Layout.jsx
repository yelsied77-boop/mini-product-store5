import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar />

      {showWelcome && (
        <div className="welcome-message">
          Welcome to Mini Product Store!
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;