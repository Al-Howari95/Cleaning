import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import Button from "../Component/Button";

const Categories = () => {
  const [cardsData, setCardsData] = useState([]);

  
  useEffect(() => {
    // Make an Axios GET request to your JSON server endpoint
    axios.get('http://localhost:4000/Sarvices')
      .then(response => {
        // Set the response data to the state variable
        setCardsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      
  }, []);
  

  return (
    <div  className="flex flex-col items-center">
      {Array.from({ length: 3 }).map((_, groupIndex) => (
        <div key={groupIndex}>
          <h1 className="text-3xl font-bold my-4">Hourly Cleaning</h1>
          <h3 className="text-sm text-center text-gray-600 my-6">
            Awesome site. On the top advertising a business online includes<br />assembling Having the most keep.
          </h3>
          <div  className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-20">
            {cardsData.slice(groupIndex * 4, (groupIndex + 1) * 4).map((card, index) => (
              <div key={index} id='lala' className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={card.image} alt="" />
                </a>
                <div className="p-4 text-center">
                  <a href="#">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h5>
                  </a>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                    {card.content}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3 h-3 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
                            <Button />

          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;