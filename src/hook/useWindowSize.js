// write a hook to get the window size
import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    
    useEffect(() => {
        const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return { width: size[0], height: size[1] };
    };

export default useWindowSize;