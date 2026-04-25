import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Profile } from '@/types/profile'

type MembersStore = {
  members: Profile[]
  toggleFavorite: (id: number) => void
  initMembers: () => Promise<void>
}

export const useMembersStore = create<MembersStore>()(
  persist(
    (set, get) => ({
      members: [],
      toggleFavorite: (id) =>
        set((state) => ({
          members: state.members.map((m) =>
            m.id === id ? { ...m, favorite: !m.favorite } : m
          ),
        })),
      initMembers: async () => {
        if (get().members.length > 0) return
        const res = await fetch('/data/member.json')
        const data = await res.json()
        set({ members: data.members })
      },
    }),
    { name: 'members' }
  )
)
