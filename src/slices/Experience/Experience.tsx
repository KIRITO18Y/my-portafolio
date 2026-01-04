'use client';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';

export const Experience = () => {
    const [experiences, setExperiences] = useState<any[]>([])

    useEffect(() => {
        fetch('/api/Experience/?depth=2')
            .then(resp => resp.json())
            .then(data => {
                setExperiences(data.docs ?? []);
            })
            .catch(err => console.error(err))
    }, [])

    console.log(experiences);
    return (
        <div className="experience-container">
            <h3 className="experience-title">Aliados y Experiencia</h3>

            <div className='experience-header'>
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card">
                        <div className="experience-img">
                            <img src={experience.photo?.url}
                                alt={experience.photo?.alt || 'imagen de la experiencia'} />
                        </div>

                        <div className='experience-logos'>
                            <FontAwesomeIcon icon={faLink} className='experience-fagithub' />
                            <div className='experience-titles'>
                                <span className='title-net'>{experience.title}</span>
                                <span className='title-development'>{experience.subtitle}</span>
                            </div>
                        </div>

                        <p className='experience-description'>
                            {experience.description}
                        </p>

                        <div className='experience-link'>
                            <div className='link-net'>
                                <FontAwesomeIcon icon={faLink} className='falink' />
                                <a href="">SIEMPRE.NET</a>
                            </div>
                        </div>
                        <div className='experience-vd'>
                            <video src="aaaaa">video</video>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}