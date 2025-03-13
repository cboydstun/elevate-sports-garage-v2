import AuthService from "./AuthService";

export const loginAdmin = async (formData) => {
    try {
       const response = await AuthService.post("/admin",formData);
      console.log('lol')
    return response.data;
    }
    catch (error) {
      
    }
  };
  