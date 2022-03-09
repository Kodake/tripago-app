import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useUrl } from "../hooks/useUrl";
import { Trip } from "../interfaces/appInterfaces";
import FilterInput from "./FilterInput";
import SelectInput from "./SelectInput";

import './TripList.css';

const TripList = () => {

    const { url, setUrl } = useUrl();
    const { data, isPending } = useFetch(url);

    return (
        <div className='trip-list'>
            <h2>TripList</h2>

            <SelectInput onChange={setUrl} />

            <FilterInput onClick={setUrl} />

            {isPending && <div>Loading trips...</div>}

            <ul>
                {data.length > 0 &&
                    data.map((trip: Trip) => {
                        return (
                            <li key={trip.id}>
                                <h3>{trip.title}</h3>
                                <p>{trip.price}</p>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default TripList;
