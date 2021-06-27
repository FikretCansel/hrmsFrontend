import JobAdvertisementDashboard from "./layouts/JobAdvertisement/JobAdvertisementDashboard";
import Sidebar from "./layouts/Navi/Sidebar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import JobAdvertisementAdd from "./pages/JobAdvertisementAdd";
import CompanyProfileDashboard from "./pages/CompanyProfileDashboard";

import { Grid } from "@material-ui/core";
function App() {
  return (
    <div style={{ margin: "auto" }}>
      <Sidebar />
      <Grid
        item
        container
        spacing={0}
        xs={12}
        justify="center"
        style={{ minHeight: "100vh",marginTop:"50px" }}
      >
        <Grid item xs={7}>
        <Route path="/jobAdvertisement" component={JobAdvertisementDashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        
        <Route path="/company/:id" component={CompanyProfileDashboard} />
        <Route path="/" exact component={Home} />
        <Route path="/profile/:id" component={JobSeekerProfile} />
        <Route path="/JobAdvertisementAdd" component={JobAdvertisementAdd} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
