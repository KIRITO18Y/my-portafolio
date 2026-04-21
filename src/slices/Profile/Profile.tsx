'use client'
import './profile.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaTelegramPlane } from 'react-icons/fa'

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
            <div className='profile-content'>
                <div className='infor'>
                    <div className="profile-line">
                        <h1 className='profile-nombre '>{profile.title}</h1>
                        <span className='profile-raya'>|</span>
                        <div className="profile-fullname ">
                            <span className="profile-name-up">{profile.firstName}</span>
                            <span className="profile-name-down">{profile.lastName}</span>
                        </div>
                    </div>

                    <div className=''>
                        <h2 className="profile-titulo ">{profile.subtitle}</h2>
                        <p className="profile-descripcion ">
                            {profile.description}
                        </p>
                    </div>
                </div>
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
                        <FaTelegramPlane className='fatelegram-icon' />
                        <span>Recomendar</span>
                    </span>
                </div>
            </div>
            <div className="profile-foto-box ">
                {profile.photo?.url && (
                    <Image
                        src={profile.photo.url}
                        alt={profile.titulo}
                        className="profile-foto"
                        width={340}
                        height={480}
                    />
                )}
            </div>
        </div>
    )
}
