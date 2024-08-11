import React, { useState } from 'react';
import Group from './Group';

export default function GeneralInfo() {
  const [data, setData] = useState({ name: '', email: '', phone: '' });

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }
  return (
    <div className='general-info'>
      <h2>General Information</h2>
      <Group label='Name ' name='name' value ={data.name} onChange={handleChange} />
      <Group label='Email ' name='email' type ='email' value={data.email} onChange={handleChange} />
      <Group label='Phone ' name='phone' type ='number' value={data.phone} onChange={handleChange} />
      <button>Accept</button>
    </div>
  )
}
