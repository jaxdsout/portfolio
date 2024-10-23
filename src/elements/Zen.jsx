import { useEffect } from "react";

function Zen () {

    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector('.zen-notif').classList.add('fade-out');
          document.querySelector('.author').classList.add('fade-out');
          document.querySelector('.portfolio').classList.add('fade-out');
        }, 1500);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container d-flex justify-content-center text-white">
            <p className="zen-notif">You have now activated zen mode.</p>
        </div>
    )
}

export default Zen