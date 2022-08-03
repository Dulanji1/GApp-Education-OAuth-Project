import React from "react";
import { Button } from "@mui/material";
import Box from "@material-ui/core/Box";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="div"
      >
        <a
          href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http://localhost:3000/profile&prompt=consent&response_type=code&client_id=410851594897-b3pab1hqinh5p6ojdssorppkhi3jv9nt.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive+https://www.googleapis.com/auth/userinfo.profile+https://www.google.com/m8/feeds/+https://www.googleapis.com/auth/userinfo.email&access_type=offline&flowName=GeneralOAuthFlow"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outlined" color="error">
            <GoogleIcon style={{ marginRight: ".6rem" }} /> LOGIN WITH GOOGLE{" "}
          </Button>
        </a>
      </Box>

      <p>locals{localStorage.getItem("code")}</p>
    </div>
  );
};

export default LoginForm;
