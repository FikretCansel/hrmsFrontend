import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import jobAdvertisementService from "../../services/jobAdvertisementService";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ACompanyJobAdvertisements({id}) {
  const classes = useStyles();
  const [jobAdvertisements, setJobAdvertisements] = useState([])
  
  const user = useSelector(state => state.user);

  useEffect(() => {


    if(id==="my"){
      let myId=user.user?.id;
      myId!==null&&
      fetchData(myId)
    }else{
      fetchData(id)
    }
    
  }, [id,user]);


  const fetchData=(companyId)=>{
    let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer
      .getByEmployerId(companyId)
      .then((result) => setJobAdvertisements(result.data.data));
  }



  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Şirkete ait iş ilanları</TableCell>
            <TableCell align="right">minumum maaş</TableCell>
            <TableCell align="right">Max-maaş</TableCell>
            <TableCell align="right">iş pozisyonu</TableCell>
            <TableCell align="right">şehir</TableCell>
            <TableCell align="right">detaylar için</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {jobAdvertisements.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{row.minSalary}</TableCell>
              <TableCell align="right">{row.maxSalary}</TableCell>
              <TableCell align="right">{row.jobPosition.name}</TableCell>
              <TableCell align="right">{row.city.cityName}</TableCell>
              <TableCell align="right"><Link to={`/jobAdvertisement/detail/${row.id}`}>Başvur</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}