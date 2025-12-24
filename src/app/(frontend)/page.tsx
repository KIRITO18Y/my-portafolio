import React from 'react'
import './styles.css'
import { Projects } from '@/slices/Projects/Projects'
import { Profile } from '@/slices/Profile/Profile'
import { Experience } from '@/slices/Experience/Experience'

export default async function HomePage() {

  return (
    <div className="home">
      <div className="content">
        <div className='profile-seccion fade-up'>
          <Profile />

          <div>
            <Projects />
          </div>

          <div>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  )
}
