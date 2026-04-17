import { useState } from 'react'
import FrinedsBar from '@/Friends/FriendsBar'
import FriendsHeader from '@/Friends/FriendsHeader'
import OtherProfile from '@/components/OtherProfile'
import { useMembers } from '@/context/MembersContext'

type TabType = 'all' | 'favorite' | 'chat'

function Friends() {
  const { members } = useMembers()
  const [currentTab, setCurrentTab] = useState<TabType>('all')

  const favoriteMembers = members.filter((member) => member.favorite)

  const visibleMembers =
    currentTab === 'all'
      ? members
      : currentTab === 'favorite'
        ? favoriteMembers
        : []

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <FriendsHeader />
      <FrinedsBar
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        totalCount={members.length}
      />

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {visibleMembers.map((member) => (
          <OtherProfile
            key={member.id}
            profile={member}
          />
        ))}
      </div>
    </div>
  )
}
export default Friends
