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
import Createworkouts from '../createworkouts/createworkouts';
import EditWorkOut from '../EditWorkOuts/EditWorkOut';
import CreateSupplements from '../CreateSupplements/CreateSupplements';
import EditSupplements from '../EditSupplements/EditSupplements';
import { useEffect } from 'react';



function App() {

  const [user, setUser] = useState(getUser());
  const [choosenWorkOut, setChoosenWorkOut] = useState({})
  const [choosenSupplements, setChoosenSupplements] = useState({})
  const [choosenNutrition, setChoosenNutrition] = useState({})


  return (


    <main className="App">
      {user ?
        user.admin ?
          <>
            <Navbar user={user} />
            <Routes>
              <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
              <Route path="/createWorkouts" element={< Createworkouts />} />
              <Route path="/editWorkouts/:id" element={< EditWorkOut choosenWorkOut={choosenWorkOut} />} />
              <Route path="/workouts" element={<WorkOutPage setChoosenWorkOut={setChoosenWorkOut} />} />
              <Route path="/workouts/:id" element={<WorkOutShowPage choosenWorkOut={choosenWorkOut} user={user} />} />
              <Route path="/CreateSupplements" element={< CreateSupplements />} />
              <Route path="/editSupplements/:id" element={< EditSupplements choosenSupplements={choosenSupplements} />} />
              <Route path="/supps" element={<SuppsPages setChoosenSupplements={setChoosenSupplements} />} />
              <Route path="/supps/:id" element={<SuppsShowPage choosenSupplements={choosenSupplements} />} />
              <Route path="/nutrition" element={<NutritionPage user={user} />} />
              <Route path="/nutrition/:id" element={<NutruitionShowPage user={user} />} />
            </Routes>
          </>
          :
          <>
            <Navbar user={user} />
            <Routes>
              <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
              <Route path="/workouts" element={<WorkOutPage setChoosenWorkOut={setChoosenWorkOut} />} />
              <Route path="/workouts/:id" element={<WorkOutShowPage choosenWorkOut={choosenWorkOut} user={user} />} />
              <Route path="/supps" element={<SuppsPages user={user} setUser={setUser} />} />
              <Route path="/supps/:id" element={<SuppsShowPage user={user} setUser={setUser} />} />
              <Route path="/nutrition" element={<NutritionPage user={user} setUser={setUser} />} />
              <Route path="/nutrition/:id" element={<NutruitionShowPage user={user} setUser={setUser} />} />
            </Routes>
          </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>

  );
}

export default App;
