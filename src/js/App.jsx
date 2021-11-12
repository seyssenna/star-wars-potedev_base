import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import { useSelector } from 'react-redux';

//auth
import { RequireAuth } from './features/auth/requireAuth'
import { useIsAuth } from './hooks/useIsAuth'

//Public
import { LoginPage } from './features/login/LoginPage';
import { UsersManager } from './features/users/usersManager';
import { RegisterPage } from './features/register/RegisterPage';

//Protected
import { PeopleManager } from './features/people/PeopleManager';
import { StarshipsManager } from './features/starships/starshipsManager';
import { PlanetsManager } from './features/planets/PlanetsManager';

import '../css/App.css'

function App() {
  const isInitialized = useSelector(state => state.auth.isInitialized)

  //La logique pour savoir si l'utilisateur.rice est connecté.e
  //Avec le useEffect()
  useIsAuth();

  //Si l'application n'est pas encore initialisé
  if (!isInitialized) return <p>App is Loading</p>

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <UsersManager />
              </RequireAuth>
            }
          />
          <Route
            path="/people"
            element={
              <RequireAuth>
                <PeopleManager />
              </RequireAuth>
            }
          />
          <Route
            path="/starships"
            element={
              <RequireAuth>
                <StarshipsManager />
              </RequireAuth>
            }
          />
          <Route
            path="/planets"
            element={
              <RequireAuth>
                <PlanetsManager />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
