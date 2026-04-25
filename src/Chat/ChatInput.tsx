import { useRef, useState } from 'react'
import SendIcon from '@assets/icon-send.svg'
import PlusCircle from '@assets/icon-pluscircle.svg'
import Image from '@assets/icon-image.svg'
import At from '@assets/icon-at.svg'
import Emoji from '@assets/icon-emoji.svg'

interface Props {
  onSend: (text: string) => void
}

function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (!message.trim() && !imagePreview) return
    onSend(message)
    setMessage('')
    setImagePreview(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = `${Math.min(e.target.scrollHeight, 88)}px`
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImagePreview(URL.createObjectURL(file))
    e.target.value = ''
  }

  const isActive = message.trim().length > 0 || imagePreview !== null

  return (
    <div className="px-3 pt-4 pb-9 flex flex-col bg-gray-5 shadow-[0_-1px_13px_rgba(0,0,0,0.06)]">
      {imagePreview && (
        <div className="relative w-16 h-16 mb-3">
          <img
            src={imagePreview}
            alt="첨부 이미지"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <button
            onClick={() => setImagePreview(null)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-60 rounded-full flex items-center justify-center text-white text-[10px] leading-none"
          >
            ✕
          </button>
        </div>
      )}

      <textarea
        rows={1}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full px-1 resize-none leading-5.5 overflow-y-auto no-scrollbar
                  placeholder:text-[16px]
                  placeholder:font-normal
                  placeholder:leading-5.5
                  placeholder:tracking-[-0.08px]
                  placeholder:text-gray-40
                  placeholder:opacity-100
                  focus:outline-none"
        placeholder="메시지를 입력해보세요."
      />

      <div className="pt-5 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <button className="cursor-pointer">
            <img src={PlusCircle} alt="" className="w-8 h-8" />
          </button>
          <button className="cursor-pointer" onClick={handleImageClick}>
            <img src={Image} alt="" className="w-9 h-9" />
          </button>
          <button className="cursor-pointer">
            <img src={At} alt="" className="w-9 h-9" />
          </button>
          <button className="cursor-pointer">
            <img src={Emoji} alt="" className="w-8.5 h-8.5" />
          </button>
        </div>

        <button
          onClick={handleSend}
          disabled={!isActive}
          className={`
            w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200
            ${isActive ? 'bg-blue-50' : 'bg-gray-30'}
          `}
        >
          <img src={SendIcon} alt="" className="w-6.5 h-6.5" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default ChatInput
