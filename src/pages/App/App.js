import './App.css';
import { useState } from 'react';
import WorkOutPage from '../WorkOutPage/WorkOutPage';
import AuthPage from '../AuthPage/AuthPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import NutruitionShowPage from '../NutritionPage/NutruitionShowPage';


function App() {

  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      {
        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/workouts" element={<WorkOutPage/>}/>
          <Route path='/workouts/new' element={<WorkOutPage/>}/> 
          <Route path="/nutrition" element={<NutritionPage/>}/>
          <Route path="/nutrition/new" element={<NutritionPage/>}/>
          <Route path="/nutrition/:id" element={<NutruitionShowPage/>}/>
        </Routes>
        
      }
    </main>
      
  );
}

export default App;
