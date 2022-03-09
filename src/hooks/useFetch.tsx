import { useEffect, useRef, useState } from "react";
import { Trip } from "../interfaces/appInterfaces";

export const useFetch = (url: string, _options: any) => {
    const [data, setData] = useState<Trip[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const options = useRef(_options).current;

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            console.log(options);
            
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                const json = await res.json();

                setIsPending(false);
                setData(json);
                setError(null);
            } catch (err: any) {
                if (err.name === 'AbortError') {
                    console.log('The fetch was aborted');
                } else {
                    setIsPending(false);
                    setError('Could not fetch the data');
                }
            }
        }
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url, setData, options]);

    return { data, isPending, error }

}
