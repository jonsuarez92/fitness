import './App.css';
import { useState } from 'react';
import WorkOutPage from '../WorkOutPage/WorkOutPage';
import WorkOutShowPage from '../WorkOutPage/WorkOutShowPage';
import AuthPage from '../AuthPage/AuthPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import NutruitionShowPage from '../NutritionPage/NutruitionShowPage';
import SuppsPages from '../SuppsPage/SuppsPage';
import SuppsShowPage from '../SuppsPage/SuppsShowPage';
import Navbar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';



function App() {

  const [user, setUser] = useState(getUser());
  const [ choosenWorkOut,setChoosenWorkOut] = useState({})
  
  return (
    
    
    <main className="App">
      {user ?
       <>
       <Navbar/>
       <Routes>
         <Route path="/" element={<HomePage user={user} setUser={setUser}/>}/>
          <Route path="/workouts" element={<WorkOutPage setChoosenWorkOut={setChoosenWorkOut}/>}/>
          <Route path="/workouts/:id" element={<WorkOutShowPage choosenWorkOut={choosenWorkOut}/>}/>
          <Route path="/supps" element={<SuppsPages user={user} setUser={setUser}/>}/>
          <Route path="/supps/:id" element={<SuppsShowPage user={user} setUser={setUser}/>}/>
          <Route path="/nutrition" element={<NutritionPage user={user} setUser={setUser}/>}/>
          <Route path="/nutrition/:id" element={<NutruitionShowPage user={user} setUser={setUser}/>}/>
        </Routes>
        </>:
        <AuthPage setUser={setUser}/>
      }
    </main>
      
  );
}

export default App;
