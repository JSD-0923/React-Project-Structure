import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, DataRouteMatch } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
