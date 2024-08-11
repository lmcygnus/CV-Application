import {useState}  from 'react';
import Group from './Group';

export default function PracticalExperience() {
  const [data, setData] = useState({ skill: '', level: '' });

  function handleChange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  }
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <Group label='Skill: ' name='skill' value ={data.skill} onChange={handleChange} />
      <Group label='Level: ' name='level' value={data.level} onChange={handleChange} />
      <button>Accept</button>
    </div>
  )
};
