import { Routes, Route } from 'react-router-dom';


import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute, PublicRoute } from '.';



export const AppRouter = () => {
  return (
    <>
      <Routes>

          <Route path='login' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
            }
          />
          <Route path='/*' element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
            } 
          />

      </Routes>
    </>
  )
}
