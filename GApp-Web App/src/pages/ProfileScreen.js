import React, { useEffect } from "react";
import ProfileForm from "../components/Profile/ProfileForm";
import { useAuth } from "./../context/Context";

/**
 * Profile screen which renders the profile components
 */
const ProfileScreen = () => {
  const { setAuthCode, accessToken, email } = useAuth();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const code = params.get("code");
  localStorage.removeItem("code");
  localStorage.setItem("code", code);

  useEffect(async () => {
    const authCode = localStorage.getItem("code");
    await setAuthCode(authCode);
  }, []);

  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default ProfileScreen;
