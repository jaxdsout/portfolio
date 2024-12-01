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
      <div className="container d-flex flex-column justify-content-center align-items-center text-white  p-3 rounded-3">
        <p className="raleway-medium text-center title text-white fs-3 text-box">404 : page not found</p>
        <p className="zen-notif">Sorry, the page you’re looking for doesn’t exist.</p>
      </div>
    );
}
  
export default NotFound;