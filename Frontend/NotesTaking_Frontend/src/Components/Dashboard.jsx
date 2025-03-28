import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FileText } from "lucide-react"; 
const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  
  const user = useSelector((state)=>state.userdata.userdata)
  console.log(user.username,'user')
  useEffect(() => {
    // Get current hour
    const currentHour = new Date().getHours();

    // Determine greeting based on time
    let time;
    if (currentHour < 12) {
      time = 'Good Morning';
    } else if (currentHour < 18) {
      time = 'Good Afternoon';
    } else {
      time = 'Good Evening';
    }

    setGreeting(`${time}, ${user.username}`);
  }, [user]);

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      {/* Greeting Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{greeting}</h1>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add your dashboard widgets or content here */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Your Insights</h2>
          {/* Add content */}
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Add content */}
        </div>
      </div>

      {/* Notepad Icon */}
      <div className="fixed bottom-8 right-8">
        <div 
          className="bg-orange-300 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-orange-400 transition duration-300"
          onClick={() => {
            // TODO: Add notepad functionality
            console.log('Open Notepad');
          }}
        >
          <FileText size={26} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;