import React from 'react';
import { useState } from 'react';
import Form from './components/Form.jsx';
import Image from 'next/image';
import Ticket from './components/Ticket.jsx';

export default function Home() {
  const [userData, setUserData] = useState(null);
  return (
    <div className="relative flex justify-center bg-[url('/background-mobile.png')] md:bg-[url('/background-tablet.png')] xl:bg-[url('/background-desktop.png')] bg-cover bg-center'">  
      {userData ? user && <Ticket user={userData} /> : <Form onSubmit={setUserData} />}
      <Image src="/pattern-lines.svg" alt="Picture of the author" width={500} height={100} className='h-screen w-auto absolute -top-40' />
      <Image src="/pattern-squiggly-line-bottom-desktop.svg" alt="Picture of the author" width={100} height={100} className='h-100 w-auto absolute bottom-0 left-0' />
      <Image src="/pattern-lines.svg" alt="Picture of the author" width={500} height={100} className='h-screen w-auto absolute -top-40' />
      <Image src="/pattern-squiggly-line-top.svg" alt="Picture of the author" width={100} height={100} className='h-100 w-auto absolute top-0 right-0' />
    </div>
  );
}
