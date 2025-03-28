import { Notes_Management_Urls } from "../Utils/Constance";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserAxios from "../Axios/UserAxios";
import { addUserNotes, RemoveNote } from "../Redux/UserSlice";

const useNotes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userdata.userdata);
  const GetNotes_Axios = async () => {
    try {
      const response = await UserAxios.get(Notes_Management_Urls, {
        params: { id: user.user_id },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        dispatch(addUserNotes(response.data));
      }
    } catch (error) {
      console.error(error, "get tasks error");
      if (error.response?.status === 401) {
        toast.error("Unauthorized access. Please log in again.");
      } else {
        toast.warning("Something went wrong. Please try again later.");
      }
    }
  };

  const AddNotes_Axios = async (data, setSubmitting) => {
    try {
      const response = await UserAxios.post(Notes_Management_Urls, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        console.log(response.data, "sign up response");
        GetNotes_Axios();
        toast.success("Note succussfully created.");
      }
    } catch (error) {
      console.log(error, "signup axios");

      if (error.response) {
        const { data } = error.response;
        const errorMessage = data?.error ? data.error : "Something went wrong";

        toast.warning(errorMessage);
      } else {
        toast.error("Network error or server not responding");
      }
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const DeleteNote_Axios = async (note_id) => {
    try {
      const response = await UserAxios.delete(Notes_Management_Urls, {
        data: { id:note_id },
        header: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
          console.log(response.data, "delete task response");
          dispatch(RemoveNote(note_id));
          toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error, "delete task error");
      if (error.response.status === 401) {
        toast.error("Unauthorized access. Please log in again.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const EditNote_Axios = async (note) => {

    try{

      const response = await UserAxios.put(Notes_Management_Urls,note,{
          headers:{
              "Content-Type" : "application/json"
          }
      })
      if(response.status === 200){
          GetNotes_Axios()
          console.log(response.data,'edit note response')
          toast.success(response.data.message)
      }
  }catch(error){
      console.error(error,'edit note error')
      if(error.response.status === 401){
          toast.error("Unauthorized access. Please log in again.")
      }else{
          toast.warning('Something went wrong. Please try again.')
      }
  }

  };

  return { AddNotes_Axios, GetNotes_Axios,DeleteNote_Axios,EditNote_Axios };
};

export default useNotes;
