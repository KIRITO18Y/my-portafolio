import Link from 'next/link'
import '../Sidebar/Sidebar.css'
import { RedesSociales } from '@/slices/RedesSociales/RedesSociales'

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className='logo'>
                <h2 className='titulo'>DEANDRE</h2>
                <p className='subtitilo'>Developer Web FullStack</p>
            </div>

            <div>
                <nav className="menu">
                    <Link href="/" className="menu-btn">Perfil</Link>
                    <Link href="/services" className="menu-btn">Servicios</Link>
                    <Link href="/apps" className="menu-btn">Apps</Link>
                    <Link href="/blog" className="menu-btn">Blog</Link>
                    <Link href="/contacts" className="menu-btn">Contacto</Link>
                </nav>
            </div>
            <div>
                <RedesSociales />
            </div>
        </aside >
    )
}
