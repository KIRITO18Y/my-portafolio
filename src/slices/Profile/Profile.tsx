'use client'
import { useEffect, useState } from 'react'
import './profile.css'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

export const Profile = () => {
    const [profile, setProfile] = useState<any>({})
    const router = useRouter();

    useEffect(() => {
        fetch('/api/globals/profiles')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])


    return (
        <div className='profile-container'>
            <div>
                <div className="profile-line">
                    <h1 className='profile-nombre '>{profile.title}</h1>
                    <span className='profile-raya'>|</span>
                    <div className="profile-fullname ">
                        <span className="profile-name-up">{profile.firstName}</span>
                        <span className="profile-name-down">{profile.lastName}</span>
                    </div>
                </div>

                <h2 className="profile-titulo ">{profile.subtitle}</h2>
                <p className="profile-descripcion ">
                    {profile.description}
                </p>
                <div className="profile-list">
                    {profile.tags?.flatMap((item: any) =>
                        item.tag
                            .split(',')
                            .map((tag: string) => tag.trim())
                    ).map((tag: string, index: number) => (
                        <span key={index} className="profile-item">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="profile-buttons">
                    <button className="btn-contactar" onClick={() => router.push('/contacts')}>Contactar Ahora</button>
                    <span className="btn-recomendar">
                        <FontAwesomeIcon icon={faPaperPlane} className='fap-icon' />
                        <span>Recomendar</span>
                    </span>
                </div>
            </div>
            <div className="profile-foto-box ">
                <img
                    src={profile.photo?.url}
                    alt={profile.titulo}
                    className="profile-foto"
                />
            </div>
        </div>
    )
}
