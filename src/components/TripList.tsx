import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useUrl } from "../hooks/useUrl";
import { Trip } from "../interfaces/appInterfaces";
import ErrorAlert from "./ErrorAlert";
import FilterInput from "./FilterInput";
import LoadingSpinner from "./LoadingSpinner";
import SelectInput from "./SelectInput";

import './TripList.css';

const TripList = () => {

    const { url, setUrl } = useUrl();
    const { data, isPending, error } = useFetch(url, { type: 'GET' });

    return (
        <div className='trip-list'>
            <h2>TripList</h2>

            <SelectInput onChange={setUrl} />

            <FilterInput onClick={setUrl} />

            {isPending && <LoadingSpinner />}

            {error && <ErrorAlert error={error} />}

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
