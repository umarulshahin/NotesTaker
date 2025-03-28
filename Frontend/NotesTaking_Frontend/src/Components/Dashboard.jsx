import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FileText } from "lucide-react"; 
import AddNotes from '../Modals/AddNotes';
import Notes from './Notes';

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state)=>state.userdata.userdata)
  
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

  const handleSubmit = (noteData) => {
    // Actual save note logic
    console.log(noteData);
  };

  return (
    <div className="min-h-screen min-w-screen bg-yellow-100 p-6 relative">
      {/* Greeting Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 pl-6">{greeting}</h1>
      </div>

      {/* Main Dashboard Content - Now taking full width */}
      <div className="w-full">
        <Notes />      
      </div>

      {/* Notepad Icon */}
      <div className="fixed bottom-8 right-8">
        <div 
          className="bg-orange-300 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-orange-400 transition duration-300"
          onClick={()=> setIsModalOpen(true)}>
          <FileText size={26} />
        </div>
      </div>

      {/* Modal Wrapper - Centered and Fixed */}
      {isModalOpen && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-full"> 
            <AddNotes 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;