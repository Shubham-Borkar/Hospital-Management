import Home from './Home';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import PastApp from './Component/Appointment/PastApp';
import ConsultOnline from './Component/ConsultOnline/ConsultOnline';
import Contact from './Component/Contact/Contact';
import HealthCheckup from './Component/HealthCheckup/HealthCheckup';
import PatientLogin from './Component/Login/PatientLogin';
import Patient from './Component/Patient/Patient';
import Profile from './Component/Profile/Profile';
import Register from './Component/Register/Register';
import Admin from './Admin/Admin';
import Doctor from './Admin/Doctor';
import DoctorAdd from './Admin/DoctorAdd';
import DoctorsDetails from './Admin/DoctorsDetails';
import Login from './Admin/Login';
import Resources from './Admin/Resources';
import StaffAdd from './Admin/StaffAdd';
import StaffDetails from './Admin/StaffDetails';
import StaffEdit from './Admin/StaffEdit';
import { Switch,Route } from 'react-router-dom';


function Launch() {
    return (<>
               
                <h1>Launcher</h1>
                <Switch>
                    <Route path="/login" exact
                               component={Login}></Route>
                    <Route path="/register" exact
                               component={Register}></Route>
                    <Route path="/login" exact
                               component={Login}></Route>
                        <Route path="/register" exact
                               component={Register}></Route>
                        <Route path="/register" exact
                               component={Register}></Route>
                       
                </Switch>
            </>);
}

export default Launch;