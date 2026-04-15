type TabType = 'all' | 'favorite' | 'chat'

type FriendsBarProps = {
  currentTab: TabType
  onChangeTab: (tab: TabType) => void
  totalCount: number
}

function FriendsBar({ currentTab, onChangeTab, totalCount }: FriendsBarProps) {
  return (
    <div className="flex flex-row h-10 px-4 border-b border-gray-20">
      <button
        onClick={() => onChangeTab('all')}
        className={`flex-1 pt-2.5 pb-2 text-body1_r antialiased ${
          currentTab === 'all'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-50'
        }`}
      >
        전체 멤버({totalCount})
      </button>

      <button
        onClick={() => onChangeTab('chat')}
        className={`flex-1 pt-2.5 pb-2 text-body1_r antialiased ${
          currentTab === 'chat'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-50'
        }`}
      >
        채팅방 멤버
      </button>

      <button
        onClick={() => onChangeTab('favorite')}
        className={`flex-1 pt-2.5 pb-2 text-body1_r antialiased ${
          currentTab === 'favorite'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-50'
        }`}
      >
        즐겨찾기
      </button>
    </div>
  )
}

export default FriendsBar
