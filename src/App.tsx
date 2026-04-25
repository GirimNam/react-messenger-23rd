import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useMembersStore } from '@/store/membersStore'
import { router } from '@/routes/router'

function App() {
  const initMembers = useMembersStore((state) => state.initMembers)

  useEffect(() => {
    initMembers()
  }, [])

  return <RouterProvider router={router} />
}

export default App
