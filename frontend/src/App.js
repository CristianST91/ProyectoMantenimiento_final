import './App.css';
import LogIn from './vistas/logIn';
import SignUp from './vistas/signUp';
import AgendaAdm from './vistas/agendaAdm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Agenda' element={<AgendaAdm />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/' element={<LogIn />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
