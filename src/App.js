import Home from './components/Home';
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
import PublicRoute from './components/PublicRoute';

function App() {

  return (
    
    <AuthProvider>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/people" component={People} />
      </Switch>
    </AuthProvider>
      
      
  );
  
}

export default App;
