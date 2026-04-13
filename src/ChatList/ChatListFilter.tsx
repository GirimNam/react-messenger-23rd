import ProfileHeaderInst from '@assets/ProfileHeaderInst.svg'
import ToggleDown from '@assets/ToggleDown.svg'
import Hamburger from '@assets/Hamburger.svg'
import search from '@assets/search.svg'
import ChatPlus from '@assets/ChatPlus.svg'

function ChatListFilter() {
  return (
    <div className="flex flex-row gap-[6px] h-[54px] py-3 px-4">
      <div className="flex flex-row ">
        <img
          src={ProfileHeaderInst}
          alt="단체"
        />
        <button className="cursor-pointer">
          <img
            src={ToggleDown}
            alt="토글"
          />
        </button>
      </div>

      <div className="flex flex-row gap-1">
        <button className="cursor-pointer">
          <img
            src={ChatPlus}
            alt="채팅 추가"
          />
        </button>
        <button className="cursor-pointer">
          <img
            src={Hamburger}
            alt="목록"
          />
        </button>
        <button className="cursor-pointer">
          <img
            src={search}
            alt="돋보기"
          />
        </button>
      </div>
    </div>
  )
}

export default ChatListFilter
