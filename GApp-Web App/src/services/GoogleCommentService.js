import http from "./HttpService";

const getGoogleFileComments = async (file, token) => {
  try {
    const response = await http.get(
      "https://www.googleapis.com/drive/v3/files/" +
        `${file}/comments?fields=*`,
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

const createGoogleFileComments = async (file, content, token) => {
  try {
    const response = await http.post(
      "https://www.googleapis.com/drive/v3/files/" +
        `${file}/comments?fields=*`,
      content,
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
  getGoogleFileComments,
  createGoogleFileComments,
};
