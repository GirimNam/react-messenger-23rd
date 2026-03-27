import { useChat } from '@/hooks/useChat'
import ChatMessage from '@Chat/ChatMessage'
import ChatInput from '@Chat/ChatInput'
import ChatHeader from '@/Chat/ChatHeader'

export default function Chat() {
  const { chatList, sendMessage } = useChat()

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <ChatHeader title="Data Visulization" />

      {/* 채팅 리스트 */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-2 space-y-2">
        {chatList.map((chat, index) => {
          const next = chatList[index + 1]

          const showTime =
            !next || // 마지막 메시지
            next.sender !== chat.sender // 다음 메시지가 다른 사람

          return (
            <ChatMessage
              key={chat.id}
              message={chat}
              showTime={showTime}
            />
          )
        })}
      </div>

      {/* 입력 */}
      <ChatInput onSend={sendMessage} />
    </div>
  )
}
