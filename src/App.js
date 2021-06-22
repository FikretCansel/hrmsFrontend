import JobAdvertisementDashboard from './layouts/JobAdvertisement/JobAdvertisementDashboard';
import Sidebar from './layouts/Navi/Sidebar';
import {Container} from "reactstrap";
import {Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register"
import JobSeekerProfile from './pages/JobSeekerProfile';
import JobAdvertisementAdd from "./pages/JobAdvertisementAdd";
import CompanyProfileDashboard from "./pages/CompanyProfileDashboard"
function App() {
  return (
    <div>
      <Sidebar />
      <Container>  
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/jobAdvertisement" component={JobAdvertisementDashboard}/>
        <Route path="/myProfile" component={JobSeekerProfile}/>
        <Route path="/JobAdvertisementAdd" component={JobAdvertisementAdd}/>
        <Route path="/company/:id" component={CompanyProfileDashboard}/>
        <Route path="/" exact component={Home}/>
      </Container>
    </div>
  );
}

export default App;
