import ChatList from '@Chat/ChatList'
import ChatInput from '@Chat/ChatInput'
import ChatHeader from '@Chat/ChatHeader'
import type { Message } from '@/types/chat'

const dummyData: Message[] = [
  { id: '1', text: '안녕', sender: 'other', time: '12:00' },
  { id: '2', text: 'ㅇㅇ', sender: 'me', time: '12:01' },
]

export default function ChatPage() {
  return (
    <div className="app">
      <ChatHeader title="Data Visualization" />
      <ChatList messages={dummyData} />
      <ChatInput />
    </div>
  )
}
