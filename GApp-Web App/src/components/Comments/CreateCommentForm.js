import React, { useState } from "react";
import { withStyles } from "@mui/styles";
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
import { useAuth } from "./../../context/Context";

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

const CreateCommentForm = (props) => {
  const { id, classes, ...rest } = props;
  const [content, setContent] = useState();
  const { createComment } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(content);
    createComment(id, content);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Card {...rest} className={clsx(classes.root, classes)}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  multiline
                  fullWidth
                  label="add comment.."
                  margin="dense"
                  name="comment"
                  variant="outlined"
                  onChange={handleChange}
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
        Save Comment
      </Button>
    </main>
  );
};

export default withStyles(styles)(CreateCommentForm);
