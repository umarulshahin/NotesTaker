import React, { useEffect, useState } from "react";
import { Trash2, Edit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useNotes from "../Hooks/useNotes";
import { useSelector } from "react-redux";
import DeleteNote from "../Modals/DeleteNote";
import EditNotes from "../Modals/EditNotes";
import ViewNotes from "../Modals/ViewNotes";

const Notes = () => {
  const notes = useSelector((state) => state.userdata.Notes);
  const { GetNotes_Axios, DeleteNote_Axios, EditNote_Axios } = useNotes();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [noteToView, setNoteToView] = useState(null);

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

  const handleViewClick = (note) => {
    setNoteToView(note);
    setViewModalOpen(true);
  };

  // Variants for container and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="w-full px-8">
      {notes && notes.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 bg-white rounded-lg shadow-md"
        >
          <p className="text-xl text-gray-500">
            No notes found. Create your first note!
          </p>
        </motion.div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {notes && notes.map((note) => (
              <motion.div
                key={note.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-lg border shadow-md overflow-hidden"
              >
                <motion.div 
                  initial={{ backgroundColor: '#FED7AA' }}
                  whileHover={{ 
                    backgroundColor: '#FDBA74',
                    transition: { duration: 0.3 }
                  }}
                  className="bg-orange-300 border-b px-3 py-2 flex justify-between items-center"
                >
                  <h2 className="text-base font-semibold text-gray-800 truncate pr-2">
                    {note.title}
                  </h2>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEditClick(note)}
                      className="text-blue-500 cursor-pointer hover:text-blue-600 transition duration-300"
                    >
                      <Edit2 size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDeleteClick(note)}
                      className="text-red-500 cursor-pointer hover:text-red-600 transition duration-300"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => handleViewClick(note)}
                  whileHover={{ 
                    backgroundColor: '#FEF3C7',
                    transition: { duration: 0.3 }
                  }}
                  className="p-4 cursor-pointer"
                >
                  <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem]">
                    {note.content}
                  </p>

                  <div className="text-xs font-bold text-gray-500 flex justify-end items-center">
                    <div className="flex space-x-1">
                      <span>Last Modified: {note.formatted_date}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Modals */}
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

      <ViewNotes
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        note={noteToView}
      />
    </div>
  );
};

export default Notes;