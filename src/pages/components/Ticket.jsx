import React from 'react'
import Image from 'next/image';

export default function Ticket({user}) {
  return (
    <div className='flex flex-col items-center h-screen w-5xl  z-20 p-3'>
      <Image src="/logo-full.svg" alt="Picture of the author" width={100} height={100} className='h-10 w-auto my-8' />
        <div className='text-center grid gap-10 my-10'> 
            <h1 className='text-3xl md:text-5xl font-semibold leading-[1.2]'>Congrats, <span className='bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent'>{user.fullName}</span>!<br />Your ticket is ready</h1>           
            <p className='text-xl text-gray-400'>We've emailed your ticket to <span className='text-[#f86c4f]'>{user.email}</span> and will send updates in the run up to the event.</p>
        </div>

        <label htmlFor="">
  <div className="relative w-full">
    <Image
      src="/pattern-ticket.svg"
      alt="Ticket pattern"
      width={100}
      height={100}
      className="w-full"
    />
    <div className="grid grid-cols-[80%_20%] grid-rows-2 gap-y-8 gap-x-6 absolute top-0 left-0 p-5 md:p-8 w-full h-full">
  <div className="grid grid-cols-[10%_90%] grid-rows-2 h-20 gap-2 col-start-1 row-start-1">
    <Image src={"logo-mark.svg"} width={100} height={100} className="h-12" />
    <p className="text-3xl md:text-4xl col-start-2 row-start-1">Coding Conf</p>
    <p className="text-gray-400 col-start-2 row-start-2">Jan 31, 2025 / Austin, TX</p>
  </div>

  <div className="grid grid-cols-[20%_80%] grid-rows-2 md:gap-2 h-20 col-start-1 row-start-2 ">
    <Image src={user.profilePic} width={100} height={100} className="h-14 md:h-20 w-auto rounded-xl row-span-2 col-start-1 row-start-1" />
    <p className="text-2xl md:text-3xl row-start-1">{user.fullName}</p>
    
    <div className="flex items-start justify-start gap-2">
      <Image src="/icon-github.svg" width={100} height={100} className="h-5 w-auto" />
      <p className=''>@{user.github}</p>
    </div>
  </div>

  <div className="col-start-2 row-span-2 flex items-center justify-center ">
    <p className="rotate-90 text-3xl text-gray-500 ">#846578</p>
  </div>
    </div>

  </div>
</label>
    </div>
  )
}
