import './styles.css'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Header } from '@/components/Header/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className='container-principal'>
          <Sidebar />
          <div className="layout-content">
            <header className='header'>
              <Header/>
            </header>
            <main className="layout-main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
