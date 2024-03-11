import { Suspense, useEffect, useState } from "react";
import { RiLoader4Line } from "react-icons/ri";
import ScrollToTop from "./component/common/scrollToTop";
import AppRoutes from "./component/AppRoutes/appRoutes";
import OfflinePage from "./component/common/OfflinePage";
import "./App.css";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <RiLoader4Line className="loader-icon" />
        </div>
      ) : isOnline ? (
        <>
          <ScrollToTop />
          <AppRoutes />
        </>
      ) : (
        <OfflinePage />
      )}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <RiLoader4Line className="loader-icon" />
        </div>
      }
    >
      <App />
    </Suspense>
  );
}