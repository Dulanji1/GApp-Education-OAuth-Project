import http from "./HttpService";
import { contactUrl } from "./../config/Config.json";

const getAllContacts = async (token, email) => {
  try {
    const response = await http.get(contactUrl + email + "/full?alt=json", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllContacts,
};
