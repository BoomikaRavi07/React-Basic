import { useState ,useEffect } from "react";
import './Wifi.css';

function Wifi(){

    const [isOnline, setIsOnline] = useState(navigator.online);

    useEffect(() =>{
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener('online', handleStatusChange);

        window.addEventListener('offline', handleStatusChange);

        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);

    return(
        <div className="container">
          <h3>Welcome to imarticus.org</h3>
          <p>Trun on/off your Wi-Fi to see what happens</p>
          {isOnline ?(
             <h1 className="online">You Are Online</h1>
            ):(
                <h1 className="offline">You Are Offline</h1>
            )}
        </div>
    );
}

export default Wifi;