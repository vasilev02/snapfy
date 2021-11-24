import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Settings from './components/Settings';
import People from './components/People';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
    
    <AuthProvider>
      <Switch>
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/people" component={People} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </AuthProvider>
      
      
  );
  
}

export default App;
