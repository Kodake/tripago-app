import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

const App = () => {

  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className='App'>
      {showTrips && <button className='btn-app' onClick={() => setShowTrips(false)}>Hide Trips</button>}
      {!showTrips && <button className='btn-app' onClick={() => setShowTrips(true)}>Show Trips</button>}
      {showTrips && <TripList />}
    </div>
  )
}

export default App;
