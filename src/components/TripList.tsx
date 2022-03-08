import { useEffect, useState } from "react";
import './TripList.css';

interface Trip {
    id: number;
    title: string;
    price: string;
}

const TripList = () => {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/trips')
            .then(data => data.json())
            .then(json => setTrips(json));
    }, [])

    return (
        <div className='trip-list'>
            <h2>TripList</h2>
            <ul>
                {trips.map((trip: Trip) => {
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
