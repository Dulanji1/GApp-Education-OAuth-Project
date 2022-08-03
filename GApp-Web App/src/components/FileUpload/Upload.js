import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";
import { Grid, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useAuth } from "./../../context/Context";
import { useHistory } from "react-router-dom";

export default function Upload() {
  const { uploadDriveFile } = useAuth();
  const history = useHistory();

  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );
  const classes = useStyles();

  const [files, storeFiles] = useState([]);

  function handleChange(file) {
    storeFiles(file);
    console.log(files);
  }

  async function uploadFiles() {
    var responses = [];

    for (let i = 0; i < files.length; i++) {
      const responseData = await uploadDriveFile(files[i]);
      responses.push(responseData.status);
    }

    history.push("/gdrive");
    console.log(responses);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Upload Files to Google Drive</h1>
        </Grid>
        <Grid item xs={8}>
          <DropzoneArea
            filesLimit={10}
            showPreviews={true}
            showPreviewsInDropzone={false}
            useChipsForPreview
            previewGridProps={{ container: { spacing: 1, direction: "row" } }}
            previewChipProps={{ classes: { root: classes.previewChip } }}
            previewText="Selected files"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" endIcon={<Send />} onClick={uploadFiles}>
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
