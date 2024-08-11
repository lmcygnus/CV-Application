import React, { useState } from 'react';
import Group from './Group';

export default function EducationalExperience() {
  const [data, setData] = useState({ schoolName: '', title: '', date: '' });

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }
  return (
    <div className='educational-experience'>
      <h2>Educational Experience</h2>
      <Group label='School Name ' name='schoolName' value ={data.schoolName} onChange={handleChange} />
      <Group label='Title of Study ' name='title' value={data.title} onChange={handleChange} />
      <Group label='Date of Study' name='date' value={data.date} onChange={handleChange} />
      <button>Accept</button>
    </div>
  )
}