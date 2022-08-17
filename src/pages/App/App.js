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
import Navbars from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import Createworkouts from '../createworkouts/createworkouts';
import EditWorkOut from '../EditWorkOuts/EditWorkOut';
import CreateSupplements from '../CreateSupplements/CreateSupplements';
import EditSupplements from '../EditSupplements/EditSupplements';
import CreateNutrition from '../CreateNutrition/CreateNutrition';
import EditNutrition from '../EditNutrition/EditNutrition';




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
            <Navbars user={user} />
            <Routes>
              <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
              <Route path="/createWorkouts" element={< Createworkouts />} />
              <Route path="/editWorkouts/:id" element={< EditWorkOut choosenWorkOut={choosenWorkOut} />} />
              <Route path="/workouts" element={<WorkOutPage setChoosenWorkOut={setChoosenWorkOut} />} />
              <Route path="/workouts/:id" element={<WorkOutShowPage choosenWorkOut={choosenWorkOut} user={user} />} />
              <Route path="/CreateSupplements" element={< CreateSupplements />} />
              <Route path="/editSupplements/:id" element={< EditSupplements choosenSupplements={choosenSupplements} />} />
              <Route path="/supps" element={<SuppsPages setChoosenSupplements={setChoosenSupplements} />} />
              <Route path="/supps/:id" element={<SuppsShowPage choosenSupplements={choosenSupplements} user={user} />} />
              <Route path="/CreateNutrition" element={< CreateNutrition />} />
              <Route path="/EditNutrition/:id" element={<EditNutrition choosenNutrition={choosenNutrition} />} />
              <Route path="/nutrition" element={<NutritionPage setChoosenNutrition={setChoosenNutrition} />} />
              <Route path="/nutrition/:id" element={<NutruitionShowPage choosenNutrition={choosenNutrition} user={user} />} />
            </Routes>
          </>
          :
          <>
            <Navbars user={user} />
            <Routes>
              <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
              <Route path="/workouts" element={<WorkOutPage setChoosenWorkOut={setChoosenWorkOut} user={user} />} />
              <Route path="/workouts/:id" element={<WorkOutShowPage choosenWorkOut={choosenWorkOut} user={user} />} />
              <Route path="/supps" element={<SuppsPages setChoosenSupplements={setChoosenSupplements} user={user} />} />
              <Route path="/supps/:id" element={<SuppsShowPage choosenSupplements={choosenSupplements} user={user} />} />
              <Route path="/nutrition" element={<NutritionPage setChoosenNutrition={setChoosenNutrition} user={user} />} />
              <Route path="/nutrition/:id" element={<NutruitionShowPage choosenNutrition={choosenNutrition} user={user} />} />
            </Routes>
          </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>

  );
}

export default App;
