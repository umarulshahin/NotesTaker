import React from 'react';
import { BookOpen, X } from 'lucide-react';

const ViewNotes = ({ 
  isOpen, 
  onClose, 
  note 
}) => {
  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg border shadow-xl 
        w-[90%] max-w-[500px] sm:w-[500px] max-h-[80vh] 
        transform transition-all duration-300 scale-100 
        animate-scale-up overflow-hidden">
        {/* Modal Header */}
        <div className="bg-orange-300 border-b px-4 py-3 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center truncate">
            <BookOpen className="mr-2" size={20} />
            {note.title || 'Untitled Note'}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 bg-yellow-100 rounded-b-lg max-h-[60vh] overflow-y-auto">
          <div className=" p-4 rounded-lg border bg-white shadow-sm">
            <div className="prose  prose-sm max-w-full">
              {note.content ? (
                <p className="text-gray-800 whitespace-pre-wrap">
                  {note.content}
                </p>
              ) : (
                <p className="text-gray-500 italic">
                  No content available
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-sky-300 text-white px-4 py-2 rounded-md 
                         hover:bg-sky-400 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotes;