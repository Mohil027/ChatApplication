import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home2 = () => {
  return (
    <div className='flex h-[35vh] w-[30vw] mx-auto my-auto border border-gray-500 rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home2