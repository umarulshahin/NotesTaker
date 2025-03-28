import React, { useEffect, useState } from "react";
import { Trash2, Edit2, Edit } from "lucide-react";
import useNotes from "../Hooks/useNotes";
import { useSelector } from "react-redux";
import DeleteNote from "../Modals/DeleteNote";
import EditNotes from "../Modals/EditNotes";

const Notes = () => {
  const notes = useSelector((state) => state.userdata.Notes);
  const { GetNotes_Axios, DeleteNote_Axios,EditNote_Axios } = useNotes();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    GetNotes_Axios();
  }, []);

  const handleDeleteClick = (note) => {
    setNoteToDelete(note);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    DeleteNote_Axios(noteToDelete.id);
    setDeleteModalOpen(false);
  };

  const handleEditClick = (note) => {
    setNoteToEdit(note);
    setEditModalOpen(true);
  };

    const handleSaveEdit = (updatedNote) => {
      EditNote_Axios(updatedNote);
      setEditModalOpen(false);
    };

  return (
    <div className="w-full px-4">
      {notes && notes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-500">
            No notes found. Create your first note!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {notes &&
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-lg border shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-orange-300 border-b px-3 py-2 flex justify-between items-center">
                  <h2 className="text-base font-semibold text-gray-800 truncate pr-2">
                    {note.title}
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(note)}
                      className="text-blue-500 cursor-pointer hover:text-blue-600 coursor-pointer transition duration-300"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(note)}
                      className="text-red-500 cursor-pointer hover:text-red-600 coursor-pointer transition duration-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem]">
                    {note.content}
                  </p>

                  <div className="text-xs font-bold text-gray-500 flex justify-end items-center">
                    <div className="flex space-x-1">
                      <span>Last Modified: {note.formatted_date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      <DeleteNote
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirmDelete={confirmDelete}
        noteTitle={noteToDelete?.title}
      />

      <EditNotes
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
        initialNote={noteToEdit}
      />
    </div>
  );
};

export default Notes;
