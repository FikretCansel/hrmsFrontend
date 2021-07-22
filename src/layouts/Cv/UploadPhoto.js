import React, { useState } from "react";
import { Dialog, TextField,Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import UploadPhotoAppBar from "./UploadPhotoAppBar";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import PhotoService from "../../services/PhotoService";

export default function UploadPhoto({
  uploadPhotoIsOpen,
  handleUploadPhotoClose,
}) {
  const [photo, setPhoto] = useState(null);
  const user = useSelector((state) => state.user);


  const handleUploadPhoto=(e)=>{
    e.preventDefault();
    if(user.user!==null && photo!==null){
    let photoService = new PhotoService();
    photoService
      .uploadJobSeekerPhoto(user.user.id,photo)
      .then((result) => console.log(result.data));
    }
    else{
      console.log("Giriş Yapınız")
    }
  }
  return (
    <Dialog
      maxWidth="md"
      fullWidth="true"
      aria-labelledby="simple-dialog-title"
      open={uploadPhotoIsOpen}
      style={{
        width: "calc(100% - 64px)",
        overflow: "hidden",
      }}
    >
      <UploadPhotoAppBar handleCvAddClose={handleUploadPhotoClose} />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={(e)=>handleUploadPhoto(e)}>
      <Grid container fullWidth>
        <Grid item xs={2}/>
        <Grid item xs={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        </Grid>
        <Grid item xs={8}>
        <TextField type="file" onChange={(e)=>setPhoto(e.target.files[0])}>Fotograf yükle</TextField>
        </Grid>
      </Grid>
      <Button type="submiy" color="primary" variant="contained" style={{margin:"50px"}}>Save</Button>
      </form>
    </Dialog>
  );
}
