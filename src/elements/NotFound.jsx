import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/");
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
      <div className="flex flex-col justify-center items-center text-white">
        <div className="bg-white/5 p-3 rounded-lg text-center">
          <p className="raleway-medium text-center text-[1.5rem]">404 : page not found</p>
          <p className="text-xs">Sorry, the page you’re looking for doesn’t exist.</p>
        </div>
      
      </div>
    );
}
  
export default NotFound;