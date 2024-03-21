import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import './App.css';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Is Loading...</h1>;
  return (
    <div>
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
