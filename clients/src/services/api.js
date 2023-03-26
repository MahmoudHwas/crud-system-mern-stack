import axios from 'axios';
const URL = 'http://localhost:8000'
 const addUser = async (data) => {
 try{
    return await axios.post(`${URL}/add`, data);
 } catch(error) {
    console.log(`error while calling add user Api`, error)
 }
}
export default addUser



export const getUsers = async () => {
   try{
   return await axios.get(`${URL}/all`);
   } catch (error) {
      console.log(`Error while calling api calls`, error)
   }
}

export const getUser = async (id) => {
   try{
      return await axios.get(`${URL}/${id}`);
   } catch (error) {
      console.log(`Error while calling api calls`, error)
   }
}

export const editUser = async (user,id) => {
   try{
      return await axios.post(`${URL}/${id}`, user);
   } catch (error) {
      console.log(`Error while calling api calls`, error)
   }
}
export const deletetUser = async (id) => {
   try{
      return await axios.delete(`${URL}/${id}`);
   } catch (error) {
      console.log(`Error while calling deleteUsers calls`, error)
   }
}

