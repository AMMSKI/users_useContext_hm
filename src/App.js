import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Users from './pages/Users';
import NavBar from './components/NavBar';
import User from './pages/User';
import { UserContext } from './providers/UserProvider';
import { useContext } from 'react';


function App() {
  const value = useContext(UserContext)

  const renderRoute = () => {
    return value.users.map((u)=> {
      return(
        <Route exact path={`/${u.name}`} render={() => <User {...u} />}/>
      )
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/users'} component={Users}/>
        {renderRoute()}
      </Switch>
    </div>
  );
}

export default App;
