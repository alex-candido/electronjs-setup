import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom'

import DefaultLayout from '../Layouts/default'
import FavoritesView from "../views/FavoritesView"
import HomeView from '../views/HomeView'

const Router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/favorites" element={<FavoritesView />} />
      </Route>
    </>
  )
)

export default Router
