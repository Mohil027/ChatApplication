import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col flex-grow'>
        <>
            <div className='bg-slate-600 px-4 py-2 mb-2'>
                <span className='label-text'>To: </span>{" "}
                <span className='text-gray-950 font-bold ml-2'> John Doe </span>
            </div>

             <Messages />
            <MessageInput />
        </>

    </div>
    
  )
}

export default MessageContainer