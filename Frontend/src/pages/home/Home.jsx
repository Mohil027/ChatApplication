import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-[80vh] w-[80vw] mx-auto my-auto border border-gray-500 rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home