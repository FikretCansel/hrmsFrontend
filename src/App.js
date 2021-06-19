import JobAdvertisementDashboard from './layouts/JobAdvertisement/JobAdvertisementDashboard';
import Navi from './layouts/Navi/Navi.js';
import {Container} from "reactstrap";
import {Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register"
import JobSeekerProfile from './pages/JobSeekerProfile';
function App() {
  return (
    <div>
      <Navi />
      <Container>  
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/jobAdvertisement" component={JobAdvertisementDashboard}/>
        <Route path="/myProfile" component={JobSeekerProfile}/>
        <Route path="/" exact component={Home}/>

      </Container>
    </div>
  );
}

export default App;
