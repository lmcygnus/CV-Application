import {useState}  from 'react';
import Group from './Group';

export default function PracticalExperience() {
  const [data, setData] = useState({ companyName: '', position: '', responsibilities: '' , date:'' });

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }
  return (
    <div className='practical-experience'>
      <h2>Practical Experience</h2>
      <Group label='Company Name: ' name='schoolName' value ={data.companyName} onChange={handleChange} />
      <Group label='Position: ' name='position' value={data.position} onChange={handleChange} />
      <textarea label='Responsibilities' name='responsibilities' value={data.responsibilities} onChange={handleChange} />
      <Group label='Date: ' name='date' value ={data.date} onChange={handleChange} />
      <button>Accept</button>
    </div>
  )
};
