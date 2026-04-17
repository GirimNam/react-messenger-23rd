import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { MembersProvider } from './context/MembersContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MembersProvider>
      <RouterProvider router={router} />
    </MembersProvider>
  </StrictMode>
)
