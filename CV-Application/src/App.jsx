import { useState } from 'react'
import GeneralInfo from '../components/GeneralInfo';
import EducationalExperience from '../components/Education';
import PracticalExperience from '../components/Jobs';
import Skills from '../components/Skills'

import './App.css'

function App() {
  return (
    <>
       <GeneralInfo />
       <EducationalExperience />
       <PracticalExperience />
       <Skills />
    </>
  )
}

export default App
