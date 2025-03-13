import AuthService from "./AuthService";

export const getHours = async () => {
    try {
       const response = await AuthService.get("/hours");
      
    return response.data;
    }
    catch (error) {
      console.log(error)
    }
  };

// update an hours
export const updateHours = async (hours) => {
    const response = await AuthService.put('/hours', hours);
    return response.data;
  };
  
