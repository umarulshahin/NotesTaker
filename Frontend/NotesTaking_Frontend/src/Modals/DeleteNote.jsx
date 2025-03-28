import React from 'react';
import { Trash2, X } from 'lucide-react';

const DeleteNote = ({ isOpen, onClose, onConfirmDelete, noteTitle }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-yellow-100 bg-opacity-90">
      <div className="bg-white border rounded-lg shadow-xl w-96">
        {/* Modal Header */}
        <div className="bg-orange-300 px-4 border-b py-3 flex justify-center items-center rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Trash2 className="mr-2" size={20} />
            Confirm Delete
          </h2>
          
        </div>

        {/* Modal Content */}
        <div className="p-6 text-center">
          <p className="text-gray-700 mb-6">
            Are you sure you want to delete the note 
            <span className="font-semibold ml-1">"{noteTitle}"</span>?
          </p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={onConfirmDelete}
              className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-md 
                         hover:bg-red-600 transition duration-300 
                         flex items-center space-x-2"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
            
            <button
              onClick={onClose}
              className="bg-sky-300 cursor-pointer text-white px-4 py-2 rounded-md 
                         hover:bg-sky-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteNote;