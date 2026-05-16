import './styles.css'
import { Sidebar } from '@/layout/Sidebar/Sidebar'
import { Header } from '@/layout/Header/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className='container-principal'>
          <Sidebar />
          <div className="layout-content">
            <Header />
            <main className="layout-main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
