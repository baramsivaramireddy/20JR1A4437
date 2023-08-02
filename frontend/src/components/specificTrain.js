import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { useParams } from 'react-router-dom';
const TrainCard = ({ train }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{train?.trainName}</h2>
        <p className="text-gray-600 mb-2">
          Train Number: {train?.trainNumber}
        </p>
        <p className="text-gray-600 mb-2">
          Departure Time: {train?.departureTime.Hours}:{train?.departureTime.Minutes}
        </p>
        <p className="text-gray-600 mb-2">
          Seats Available (Sleeper): {train?.seatsAvailable.sleeper}
        </p>
        <p className="text-gray-600 mb-2">
          Seats Available (AC): {train?.seatsAvailable.AC}
        </p>
        <p className="text-gray-600 mb-2">
          Price (Sleeper): {train?.price.sleeper}
        </p>
        <p className="text-gray-600 mb-2">
          Price (AC): {train?.price.AC}
        </p>
        <p className="text-gray-600 mb-2">
          Delayed By (minutes): {train?.delayedBy}
        </p>
      </div>
    );
  };

  
function SpecificTrain() {
  
  const [train, setTrain] = useState(null);
  
    const {id} = useParams();
   
  const getTrain = () => {
  
    axios.get(`http://localhost:8000/trains/${id}`)
      .then(response => {
        setTrain(response.data);
   
      })
      .catch(error => {
        console.error('Error', error.message);
        
      });
  };

  useEffect(() => {getTrain() } ,[])

  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'>Specific Train Details</h2>
            


      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Train Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          <TrainCard  train={train} />
  
      </div>
    </div>
    </div>
  );
}

export default SpecificTrain;
