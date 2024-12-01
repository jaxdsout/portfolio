import { useEffect } from "react";

function Zen () {

    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('.zen-notif').classList.add('fade-out');
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container d-flex justify-content-center text-white animator">
            <p className="zen-notif">You have now activated zen mode.</p>
        </div>
    )
}

export default Zen