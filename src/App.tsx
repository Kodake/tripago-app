import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

const App = () => {

  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className='App'>
      <button className='btn-app' onClick={() => setShowTrips(false)}>Hide Trips</button>
      {showTrips && <TripList />}
    </div>
  )
}

export default App;
