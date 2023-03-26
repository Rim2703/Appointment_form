import './App.css';
import AppointmentForm from './components/Appointment';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/appointments' element={<AppointmentForm/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <AppointmentForm /> */}
    </div>
  );
}

export default App;


// software company website only one page UI very good 
// have form (name,email,phone,hr,manager) select box (time slot) 10 to 11 , 10 to 12, 