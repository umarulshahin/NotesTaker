import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import useNotes from "../Hooks/useNotes";
import { useSelector } from "react-redux";

// Validation schema using Yup
const NotesValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters")
    .required("Title is required"),
  content: Yup.string()
    .min(3, "Content must be at least 10 characters")
    .max(500, "Content must be at most 500 characters")
    .required("Content is required"),
});

const AddNotes = ({ isOpen, onClose, onSubmit }) => {
  // Initial values for the form
  const initialValues = {
    title: "",
    content: "",
  };


  const {AddNotes_Axios} = useNotes();
  const user= useSelector((state)=>state.userdata.userdata)
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    values.user = user.user_id;
    console.log(values);
    AddNotes_Axios(values,setSubmitting);

    resetForm();
    onClose();
  };

  return (
    <div open={isOpen} onOpenChange={onClose}>
      <div className="w-full max-w-2xl mx-auto bg-yellow-100 shadow-2xl rounded-xl border p-0">
        <div className="flex justify-between bg-orange-300 items-center px-4 py-1 border-b rounded-t-xl">
          <div className="text-black font-bold text-2xl">Add Notes</div>
          <button
            onClick={() => onClose()}
            className="text-black hover:bg-orange-400 rounded-full p-2 transition duration-300"
          >
            <X size={28} />
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={NotesValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="p-6 space-y-4">
              <div>
                <Field
                  name="title"
                  type="text"
                  placeholder="Enter note title"
                  className={`w-full p-2 text-lg border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.title && touched.title ? "border-red-500" : ""
                  }`}
                />
                {errors.title && touched.title && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.title}
                  </div>
                )}
              </div>

              <div>
                <Field
                  name="content"
                  as="textarea"
                  placeholder="Write your note content"
                  className={`w-full p-2 text-lg border font-serif rounded-lg bg-white h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.content && touched.content ? "border-red-500" : ""
                  }`}
                />
                {errors.content && touched.content && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.content}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-lg font-serif text-white rounded-lg bg-red-400 hover:bg-red-500 cursor-pointer transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-lg bg-green-400 font-serif cursor-pointer text-white rounded-lg hover:bg-green-500 transition duration-300 disabled:opacity-50"
                >
                  Add Note
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNotes;
