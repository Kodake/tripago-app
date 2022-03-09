import { useEffect, useState } from "react";
import { Trip } from "../interfaces/appInterfaces";

export const useFetch = (url: string) => {
    const [data, setData] = useState<Trip[]>([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);

            const res = await fetch(url);
            const json = await res.json();

            setIsPending(false);
            setData(json);
        }
        fetchData();
    }, [url, setData]);

    return { data, isPending }

}
