import React, { useContext, useState } from "react";
import AuthService from "../services/AuthService";
import GoogleService from "../services/GoogleService";
import ContactService from "../services/ContactService";
import GoogleCommentService from "../services/GoogleCommentService";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [picture, setPicture] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  // set auth code
  async function setAuthCode(code) {
    const response = await AuthService.getAuthCode(code);
    const data = response.data;
    setEmail(data.user_profile.email);
    setFamilyName(data.user_profile.family_name);
    setGivenName(data.user_profile.given_name);
    setName(data.user_profile.name);
    setPicture(data.user_profile.picture);
    setVerifiedEmail(data.user_profile.verified_email);
    setAccessToken(data.tokens.access_token);
    setRefreshToken(data.tokens.refresh_token);

    console.log(response);
    return response;
  }

  async function getGoogleDrive() {
    const response = await GoogleService.getGoogleDriveFiles(accessToken);
    console.log(response);
    return response;
  }

  async function deleteGoogleDriveFile(file) {
    const response = await GoogleService.deleteGoogleDriveFiles(
      file,
      accessToken
    );
    console.log(response);
    return response;
  }

  async function exportGoogleDriveFile(file, mimeType) {
    const response = await GoogleService.exportGoogleFiles(
      file,
      mimeType,
      accessToken
    );
    console.log(response);
    return response;
  }

  async function createComment(file, content) {
    const response = await GoogleCommentService.createGoogleFileComments(
      file,
      content,
      accessToken
    );
    return response;
  }

  async function getAllContacts() {
    const response = await ContactService.getAllContacts(accessToken, email);
    console.log(response);
    return response;
  }

  async function uploadDriveFile(formData) {
    const response = await GoogleService.uploadGoogleDriveFile(
      accessToken,
      formData
    );
    console.log(response);
    return response;
  }

  const value = {
    email,
    name,
    familyName,
    givenName,
    picture,
    verifiedEmail,
    accessToken,
    refreshToken,
    setAuthCode,
    getGoogleDrive,
    getAllContacts,
    uploadDriveFile,
    deleteGoogleDriveFile,
    exportGoogleDriveFile,
    createComment,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
