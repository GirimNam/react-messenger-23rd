import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useChat } from '@/hooks/useChat'
import ChatMessage from '@Chat/ChatMessage'
import ChatInput from '@Chat/ChatInput'
import ChatHeader from '@Chat/ChatHeader'
import DateDivider from '@Chat/DateDivider'
import ReadDivider from '@Chat/ReadDivider'

export default function Chat() {
  const { id } = useParams()
  const { chatList, chatroomName, memberCount, sendMessage } = useChat(
    Number(id)
  )
  const scrollRef = useRef<HTMLDivElement>(null)
  const [lastReadId, setLastReadId] = useState<string | null>(null)

  useEffect(() => {
    const readRooms: number[] = JSON.parse(
      localStorage.getItem('readRooms') ?? '[]'
    )
    if (!readRooms.includes(Number(id))) {
      readRooms.push(Number(id))
      localStorage.setItem('readRooms', JSON.stringify(readRooms))
    }
  }, [id])

useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [chatList])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && chatList.length > 0) {
        setLastReadId(chatList[chatList.length - 1].id)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [chatList])

  return (
    <div className="flex flex-col flex-1 overflow-hidden w-full bg-gray-20">
      <ChatHeader
        title={chatroomName}
        memberCount={memberCount}
      />

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto no-scrollbar px-3"
      >
        {chatList.map((chat, index) => {
          const next = chatList[index + 1]
          const prev = chatList[index - 1]

          const isSameGroupWithNext = next && next.sender === chat.sender

          const gapClass = isSameGroupWithNext ? 'mb-[4px]' : 'mb-[20px]'

          const isNewDay = !prev || prev.date !== chat.date

          return (
            <div
              key={chat.id}
              className={`flex flex-col ${gapClass}`}
            >
              {isNewDay && <DateDivider date={chat.date} />}

              <ChatMessage
                message={chat}
                showTime={
                  !next ||
                  next.sender !== chat.sender ||
                  next.time !== chat.time
                }
                showTail={
                  !prev ||
                  prev.sender !== chat.sender ||
                  prev.date !== chat.date
                }
              />
              {lastReadId === chat.id && next && <ReadDivider />}
            </div>
          )
        })}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  )
}
