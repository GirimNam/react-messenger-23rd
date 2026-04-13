import Chat from '@/pages/Chat'
import ChatList from '@/pages/ChatList'
import Friends from '@/pages/Friends'
import MyProfile from '@/pages/MyProfile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/myprofile"
            element={<MyProfile />}
          />
          <Route
            path="/friends"
            element={<Friends />}
          />
          <Route
            path="/chatlist"
            element={<ChatList />}
          />
          <Route
            path="/chat"
            element={<Chat />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
