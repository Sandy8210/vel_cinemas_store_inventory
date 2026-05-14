import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import image from "./image.svg";
import { useMediaQuery } from "@/hooks/use-media-query";

const NotFound = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={image}
            alt="404 Illustration"
            className="mx-auto w-full max-w-md md:hidden"
          />

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Something is not right...
            </h1>

            <p className="text-muted-foreground text-sm md:text-base leading-7">
              The page you are trying to open does not exist. You may have
              mistyped the address, or the page has been moved to another URL.
              If you think this is an error, contact support.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Button variant="outline" onClick={() => navigate("/")}>
                Get back to home page
              </Button>
            </div>
          </div>

          {/* Desktop Image */}
          <img
            src={image}
            alt="404 Illustration"
            className="hidden w-full max-w-lg md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
