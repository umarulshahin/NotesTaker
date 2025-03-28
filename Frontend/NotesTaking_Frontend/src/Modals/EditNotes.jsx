import React, { useState, useEffect } from 'react';
import { Edit2, X } from 'lucide-react';

const EditNotes = ({ 
  isOpen, 
  onClose, 
  onSave, 
  initialNote 
}) => {
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    if (initialNote) {
      setEditedContent(initialNote.content);
    }
  }, [initialNote, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (editedContent.trim().length > 0) {
      onSave({
        ...initialNote,
        content: editedContent
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg border shadow-xl 
        w-[90%] max-w-[500px] sm:w-[500px] max-h-[80vh] 
        transform transition-all duration-300 scale-100 
        animate-scale-up">
        <div className="bg-orange-300 border-b px-4 py-3 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center truncate">
            {initialNote?.title || 'Untitled Note'}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 bg-yellow-100 border rounded-b-lg">
          <div className="mb-6">
            <textarea
              id="note-content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              rows={6}
              className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-orange-300 
                         transition duration-300 resize-none"
              placeholder="Edit your note content..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-md 
                         hover:bg-green-600 transition duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={editedContent.trim().length === 0}
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md 
                         hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotes;