import React, { useState } from "react";
import { useAuth } from "./../../context/Context";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import clsx from "clsx";

const styles = (theme) => ({
  details: {
    display: "flex",
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  locationText: {
    paddingLeft: "15px",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

const ProfileForm = (props) => {
  const { email, name, familyName, givenName } = useAuth();
  const { classes, ...rest } = props;
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const profilePictureHandler = (event) => {
    event.preventDefault();
  };
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Card {...rest} className={clsx(classes.root, classes)}>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography
                className={classes.locationText}
                gutterBottom
                variant="h4"
              >
                {name}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                size="small"
                startIcon={<CloudUploadIcon />}
                className={classes.uploadButton}
                onClick={profilePictureHandler}
              >
                Upload Photo
              </Button>
              {/* <input type="file" onChange={handleImageChange} /> */}
            </div>
          </div>
          <div className={classes.progress} />
        </CardContent>
        <Divider />
      </Card>
      <br />
      <Card {...rest} className={clsx(classes.root, classes)}>
        <form autoComplete="off" noValidate>
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  margin="dense"
                  name="firstName"
                  variant="outlined"
                  value={givenName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  margin="dense"
                  name="lastName"
                  variant="outlined"
                  value={familyName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="dense"
                  name="name"
                  variant="outlined"
                  value={name}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  margin="dense"
                  name="email"
                  variant="outlined"
                  value={email}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions />
        </form>
      </Card>
      <br />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        className={classes.submitButton}
      >
        Save details
      </Button>
    </main>
  );
};

export default withStyles(styles)(ProfileForm);
