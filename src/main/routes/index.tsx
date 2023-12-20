import React from 'react'
import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom'

import { makeFlashes } from '@main/factories/views/flashes-factory'
import { makeFlashdays } from '@main/factories/views/flashdays-factory'


export const Routes: React.FC = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route path='/' Component={makeFlashes} />
      <Route path='/flashes' Component={makeFlashes} />
      <Route path='/flashdays' Component={makeFlashdays} />
    </ReactRouterRoutes>
  </BrowserRouter>
)

