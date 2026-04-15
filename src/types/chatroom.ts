import type { Message } from './chat'

export type Chatroom = {
  id: number
  name: string
  memberCount: number
  lastMessageTime: string
  unreadCount: number
  isPinned: boolean
  messages: Message[]
}
