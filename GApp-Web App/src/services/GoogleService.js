import http from "./HttpService";
import { apiUrl, fileUploadUrl } from "./../config/Config.json";

const getGoogleDriveFiles = async (token) => {
  try {
    const response = await http.get(apiUrl + "drive", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const uploadGoogleDriveFile = async (token, file) => {
  try {
    const response = await http.post(fileUploadUrl, file, {
      headers: {
        "Content-Type": file.type,
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
        
 const deleteGoogleDriveFiles = async (file, token) => {
  try {
    const response = await http.delete(apiUrl + `drive/${file}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const exportGoogleFiles = async (file, mimeType, token) => {
  try {
    const response = await http.get(
      "https://www.googleapis.com/drive/v3/files/" +
        `${file}/export?mimeType=${mimeType}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getGoogleDriveFiles,
  deleteGoogleDriveFiles,
  exportGoogleFiles,
   getGoogleDriveFiles,
  uploadGoogleDriveFilex
};
