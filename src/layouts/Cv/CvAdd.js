import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import CvAddAppBar from "./CvAddAppBar";
import CvEducation from "./CvEducation";
import CvExperience from "./CvExperience";
import CvLanguage from "./CvLanguage";
import { Button } from "@material-ui/core";
import CvService from "../../services/cvService";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

const Menus = {
  HOME: "HOME",
  EDUCATION: "EDUCATION",
  EXPERINCE: "EXPERINCE",
  LANGUAGE: "LANGUAGE",
};


export default function CvAdd({ cvAddIsOpen, handleCvAddClose }) {

  const [Menu, setMenu] = useState(Menus.HOME);
  const [cvEducations, setEducations] = useState(null);
  const [cvExperiences, setExperiences] = useState(null);
  const [cvLanguages, setLanguages] = useState(null);
  const user = useSelector(state => state.user)
  const [summary, setSummary] = useState("");
  const [linkedinAddress, setLinkedinAddress] = useState("");
  const [githubAddress, setGithubAddress] = useState("");


  const handleChangeMenu = (Menu) => {
    setMenu(Menu);
  }
  const BackToHomeMenuButton = () => {
    return <Button variant="contained" color="primary"  onClick={() => handleChangeMenu(Menus.HOME)}>Geri</Button>
  }
  const handleSaveAll=()=>{

    if(user.user!==null){
      const cv={
      cvEducations:cvEducations?.educations,
      cvExperiences:cvExperiences?.experiences,
      cvLanguages:cvLanguages?.languages,
      jobSeeker: {
        id:user?.user?.id
      },
      linkedinAddress: linkedinAddress,
      summary: summary,
      githubAddress: githubAddress,
    }

    let cvService = new CvService();
    cvService
      .editCv(cv)
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
      open={cvAddIsOpen}
      style={{
        width: "calc(100% - 64px)",
        overflow: "hidden",
      }}
    >
      <CvAddAppBar handleCvAddClose={handleCvAddClose} />
      <br />
      <br />
      <br />
      <br />
      {Menu === Menus.HOME &&
        <div>
          <TextField
          fullWidth
          id="summary"
          name="summary"
          label="Hakkımda"
          value={summary}
          onChange={(e)=>setSummary(e.target.value)}
        />
        <TextField
          fullWidth
          id="linkedinAddress"
          name="linkedinAddress"
          label="LinkedIn Adresi"
          value={linkedinAddress}
          onChange={(e)=>setLinkedinAddress(e.target.value)}
        />
        <TextField
          fullWidth
          id="githubAddress"
          name="githubAddress"
          label="GitHub Adresiniz"
          value={githubAddress}
          onChange={(e)=>setGithubAddress(e.target.value)}
        />


          <div class="card">
            <div class="card-header" style={{ fontSize: "30px",cursor:"pointer" }} onClick={() => handleChangeMenu(Menus.EDUCATION)}>
              Egitim Bilgileri
            </div>
          </div>
          <div class="card">
            <div class="card-header" style={{ fontSize: "30px",cursor:"pointer" }} onClick={() => handleChangeMenu(Menus.EXPERINCE)}>
              Deneyim Bilgileri
            </div>
          </div>
          <div class="card">
            <div class="card-header" style={{ fontSize: "30px" ,cursor:"pointer"}} onClick={() => handleChangeMenu(Menus.LANGUAGE)}>
              Yabancı Dil Bilgileri
            </div>
          </div>
          <br />
          <br />
          <Button variant="contained" color="primary" fullWidth onClick={handleSaveAll}>
            Tümünü Kaydet
          </Button>
        </div>
      }

      {Menu === Menus.EDUCATION && <CvEducation BackToHomeMenuButton={BackToHomeMenuButton}
       setEducations={setEducations} educations={cvEducations}/>}
      {Menu === Menus.LANGUAGE && <CvLanguage  BackToHomeMenuButton={BackToHomeMenuButton}
      setLanguages={setLanguages}/>}
      {Menu === Menus.EXPERINCE &&  <CvExperience BackToHomeMenuButton={BackToHomeMenuButton}
      setExperiences={setExperiences}/>}
    </Dialog>
  );
}
