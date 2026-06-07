import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rute findes ikke:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="section-navy grid-texture flex min-h-screen items-center justify-center">
      <div className="container-narrow relative z-10 text-center">
        <p className="font-display text-[8rem] leading-none text-gradient sm:text-[12rem]">404</p>
        <h1 className="mt-2 text-3xl text-white sm:text-4xl">Siden findes ikke</h1>
        <p className="mx-auto mt-4 max-w-md font-body text-white/65">
          Den side, du ledte efter, er flyttet eller findes ikke længere.
        </p>
        <Link to="/" className="btn-green mt-8">
          <ArrowLeft className="h-4 w-4" /> Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
