'use client'
import Link from 'next/link'
import '../Sidebar/Sidebar.css'
import { RedesSociales } from '@/slices/RedesSociales/RedesSociales'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
    const pathname = usePathname()


    return (
        <aside className="sidebar">
            <div className='logo'>
                <h2 className='titulo'>DEANDRE</h2>
                <p className='subtitilo'>Developer Web FullStack</p>
            </div>

            <div>
                <nav className="menu">
                    <Link
                        href="/"
                        className={`menu-btn ${pathname === '/' ? 'active' : ''}`}
                    >
                        Perfil
                    </Link>

                    <Link
                        href="/services"
                        className={`menu-btn ${pathname === '/services' ? 'active' : ''}`}
                    >
                        Servicios
                    </Link>

                    <Link
                        href="/apps"
                        className={`menu-btn ${pathname === '/apps' ? 'active' : ''}`}
                    >
                        Apps
                    </Link>

                    <Link
                        href="/blog"
                        className={`menu-btn ${pathname === '/blog' ? 'active' : ''}`}
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contacts"
                        className={`menu-btn ${pathname === '/contacts' ? 'active' : ''}`}
                    >
                        Contacto
                    </Link>
                </nav>
            </div>
            <div>
                <RedesSociales />
            </div>
        </aside >
    )
}
