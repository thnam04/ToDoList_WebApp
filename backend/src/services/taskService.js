import axios from "axios";
import apiUrl from "../constants/api.js";

export const checkExisted = async (inputParam, type) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    const exist = data.some((task) => {
      return type === "name"
        ? task.name === inputParam
        : task.id === inputParam;
    });
    return exist;
  } catch (error) {
    console.error("Error in checkExisted function:", error);
  }
};
