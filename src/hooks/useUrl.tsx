import { useState } from "react";

export const useUrl = () => {

    const [url, setUrl] = useState('http://localhost:3000/trips');
    
    return {
        url,
        setUrl
    }
}
