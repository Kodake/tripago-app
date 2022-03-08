import { useEffect, useState } from "react";
import './TripList.css';

interface Trip {
    id: number;
    title: string;
    price: string;
}

const TripList = () => {

    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips');
    
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(json => setTrips(json));
    }, [url]);

    return (
        <div className='trip-list'>
            <h2>TripList</h2>

            <label>
                <span>Filter:</span>
                <select className='select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUrl(e.target.value)}>
                    <option value={'http://localhost:3000/trips'}>All Trips</option>
                    <option value={'http://localhost:3000/trips?loc=Europe'}>European Trips</option>
                </select>
            </label>

            <div className='filters'>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>

                <button onClick={() => setUrl('http://localhost:3000/trips?loc=Europe')} >European Trips</button>
            </div>

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
