import { createContext, useContext, useEffect, useState } from 'react'
import type { Profile } from '@/types/profile'

type MembersContextType = {
  members: Profile[]
  toggleFavorite: (id: number) => void
}

const MembersContext = createContext<MembersContextType | null>(null)

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [members, setMembers] = useState<Profile[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('members')
    if (saved) {
      setMembers(JSON.parse(saved))
      return
    }
    fetch('/data/member.json')
      .then((res) => res.json())
      .then((data) => setMembers(data.members))
  }, [])

  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem('members', JSON.stringify(members))
    }
  }, [members])

  const toggleFavorite = (id: number) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorite: !m.favorite } : m))
    )
  }

  return (
    <MembersContext.Provider value={{ members, toggleFavorite }}>
      {children}
    </MembersContext.Provider>
  )
}

export function useMembers() {
  const ctx = useContext(MembersContext)
  if (!ctx) throw new Error('useMembers must be used within MembersProvider')
  return ctx
}
