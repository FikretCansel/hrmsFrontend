import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import jobAdvertisementService from '../../services/jobAdvertisementService';

const useStyles = makeStyles((theme) => ({
    
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

export default function AddressForm() {
    const [description, setDescription] = useState("");
    const [minSallary, setMinSallary] = useState(0);
    const [maxSallary, setMaxSallary] = useState(0);
    const [jobPositionId, setJobPositionId] = useState(0);
    const [openPosition, setOpenPosition] = useState(0);
    const [lastApplyDate,setLastApplyDate]=useState(new Date());
    const [creationDate,setCreationDate]=useState(new Date());//BACKENDEN GELCEK SİLİNİP
    const [cityId, setCityId] = useState(0);
    const classes = useStyles();
    const user = useSelector(state => state.user)


    const jobAdvertisement={
        description,
        minSallary,
        maxSallary,
        lastApplyDate,
        creationDate,
        jobPosition:{
            id:jobPositionId
        },
        city:{
            id:cityId
        },
        employer:{
            id:user.id
        },
        openPositionCount:openPosition
    }

    const deneme={
        "city": {
          "cityName": "string",
          "id": 1
        },
        "creationDate": "2021-06-20T11:58:24.008Z",
        "description": "string",
        "employer": {
          "companyName": "string",
          "confirmationId": 0,
          "email": "string",
          "id": 4,
          "password": "string",
          "phone": "string",
          "websiteLink": "string"
        },
        "id": 0,
        "isActive": true,
        "jobPosition": {
          "createDate": "2021-06-20T11:58:24.008Z",
          "id": 6,
          "name": "string"
        },
        "lastApplyDate": "2021-06-20T11:58:24.008Z",
        "maxSalary": 870,
        "minSalary": 650,
        "openPositionCount": 500
      }

    const handleSave=()=>{
        let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer.add(deneme)
      .then((result) => console.log(result.data));
    }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        
      <Grid item xs={12}>
          <TextField
            required
            id="jobPosition"
            name="jobPosition"
            label="Iş pozisyonu Id"
            value={jobPositionId}
            onChange={(e)=>setJobPositionId(e.target.value)}
            fullWidth
            autoComplete="jobPosition"
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Açıklama"
            fullWidth
            autoComplete="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="min-salary"
            name="min-salary"
            label="Min-Maaş"
            fullWidth
            value={minSallary}
            autoComplete="given-name"
            onChange={(e)=>setMinSallary(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="max-salary"
            name="max-salary"
            label="Max-Maaş"
            fullWidth
            value={maxSallary}
            onChange={(e)=>setMaxSallary(e.target.value)}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="CityId"
            fullWidth
            value={cityId}
            onChange={(e)=>setCityId(e.target.value)}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="openPositionCount"
            name="openPositionCount"
            label="Açık pozisyon adedi"
            fullWidth
            value={openPosition}
            onChange={(e)=>setOpenPosition(e.target.value)}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="lastApplyDate"
            name="lastApplyDate"
            label="Son Başvuru Tarihi"
            fullWidth
            value={lastApplyDate}
            onChange={(e)=>setLastApplyDate(e.target.value)}
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSave}
                  >
                    Ilan Ver
                  </Button>
                </div>
      </Grid>
    </React.Fragment>
  );
}