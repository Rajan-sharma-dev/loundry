import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Registration from './components/register';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/registeration" />
      </Routes>
    </>
  );
}

export default App;
