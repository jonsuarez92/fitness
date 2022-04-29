import './App.css';
import { useState } from 'react';
import WorkOutPage from '../WorkOutPage/WorkOutPage';
import AuthPage from '../AuthPage/AuthPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'


function App() {

  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      {
        user ? 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/workouts" element={<WorkOutPage/>}/>
          <Route path='/workouts/new' element={<WorkOutPage/>}/> 
          <Route path="/nutrition" element={<NutritionPage/>}/>
          <Route path="/nutrition/new" element={<NutritionPage/>}/>
        </Routes>:
        <AuthPage setUser={setUser}/>
      }
    </main>
      
  );
}

export default App;
