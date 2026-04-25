type Tab = 'all' | 'unread' | 'favorite' | 'group'

const TABS: { key: Tab; label: string }[] = [
  { key: 'all', label: '모두' },
  { key: 'unread', label: '읽지 않음' },
  { key: 'favorite', label: '즐겨찾기' },
  { key: 'group', label: '그룹' },
]

interface Props {
  activeTab: Tab
  onChangeTab: (tab: Tab) => void
}

function ChatListFilter({ activeTab, onChangeTab }: Props) {
  return (
    <div className="flex flex-row items-center gap-1.5 h-13.5 py-3 px-4">
      {TABS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChangeTab(key)}
          className={`
            px-3.5 py-1.5 rounded-full whitespace-nowrap antialiased
            ${
              activeTab === key
                ? 'bg-blue-50 text-white text-body3_sb'
                : 'border border-gray-30 text-gray-80 bg-white text-body3_r'
            }
          `}
        >
          {label}
        </button>
      ))}

      <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-30 text-gray-60 text-base leading-none">
        +
      </button>
    </div>
  )
}

export default ChatListFilter
export type { Tab }
