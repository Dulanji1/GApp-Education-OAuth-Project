import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import doc from "../../media/doc.png";
import file from "../../media/file.png";
import form from "../../media/form.png";
import presentation from "../../media/presentation.png";
import video from "../../media/video.png";
import image from "../../media/image.png";
import xls from "../../media/xls.png";
import zip from "../../media/zip.png";
import folder from "../../media/folder.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { DeleteTwoTone } from "@mui/icons-material";
import { useAuth } from "./../../context/Context";

export default function GDrive() {
  const [data, setData] = useState([]);
  const { getGoogleDrive, deleteGoogleDriveFile, exportGoogleDriveFile } =
    useAuth();

  useEffect(async () => {
    const responseData = await getGoogleDrive();
    setData(responseData.data.files);
  }, []);

  function renderIcon(type) {
    if (type === "video/mp4") {
      return <img src={video} width="50" alt="icon" />;
    } else if (type === "image/jpeg") {
      return <img src={image} width="50" alt="icon" />;
    } else if (type === "application/vnd.google-apps.document") {
      return <img src={doc} width="50" alt="icon" />;
    } else if (type === "application/vnd.google-apps.form") {
      return <img src={form} width="50" alt="icon" />;
    } else if (type === "application/vnd.google-apps.presentation") {
      return <img src={presentation} width="50" alt="icon" />;
    } else if (type === "application/x-zip-compressed") {
      return <img src={zip} width="50" alt="icon" />;
    } else if (type === "application/vnd.google-apps.spreadsheet") {
      return <img src={xls} width="50" alt="icon" />;
    } else if (type === "application/vnd.google-apps.folder") {
      return <img src={folder} width="50" alt="icon" />;
    } else {
      return <img src={file} width="50" alt="icon" />;
    }
  }

  const deleteFile = async (_id) => {
    await deleteGoogleDriveFile(_id);
    alert("file deleted");
  };

  const exportFile = async (_id, mimeType) => {
    await exportGoogleDriveFile(_id, mimeType);
  };

  const navigateToAddComment = (_id) => {
    window.location = `/create-comment/${_id}`;
  };

  return (
    <Grid container spacing={3} rowSpacing={2}>
      {data.map((e, i) => {
        return (
          <Grid item xs={2}>
            <Card button sx={{ maxWidth: 200, height: 185 }}>
              <CardContent>
                {renderIcon(e.mimeType)}

                <Typography
                  variant="body1"
                  fontSize="13px"
                  color="text.primary"
                >
                  {e.name}
                </Typography>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button size="small" onClick={() => deleteFile(e.id)}>
                    <DeleteTwoTone />
                    Delete File
                  </Button>
                  <br />
                </CardActions>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<CloudDownloadIcon />}
                  onClick={() => exportFile(e.id, e.mimeType)}
                >
                  Export
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<CloudDownloadIcon />}
                  onClick={() => navigateToAddComment(e.id)}
                >
                  Comment
                </Button>
              </CardContent>
            </Card>
            <br />
          </Grid>
        );
      })}
    </Grid>
  );
}
