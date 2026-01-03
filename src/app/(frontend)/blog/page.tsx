import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'
import '../blog/blog.css'

const BlogPage = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Blog</h1>
                <div className="blog-sections">
                    <p>Suscribete a nuestra seccion de blog y novedades</p>
                    <input type="text"
                        placeholder='Email'
                        className="blog-input" />
                    <div className="blog-buttom">
                        <span className='blog-spam'>Newsletter</span>
                        <button className="btn-blog">Suscribirme</button>
                    </div>
                </div>
            </div>

            <div className="blog-card">
                <div className="card-header">
                    <div className="blog-card-content">

                        <div className="card-contentainer">
                            <h2 className="blog-title">Primeros pasos en Payload CMS</h2>

                            <p className="blog-description">
                                Si ya has escuchado hablar de Payload CMS y te llama la atención
                                te enseño los pasos básicos para iniciar a usarlo
                            </p>

                            <div className="blog-meta">
                                <span className="blog-date">Oct. 29</span>
                                <span>Views 256</span>
                                <span>💬 256</span>
                                <span>🔖 10</span>
                                <span>👍 10</span>
                            </div>
                        </div>
                        <div className="blog-right">
                            <div className="blog-author-container">
                                <p className="blog-author">Autor: De andre</p>
                            </div>
                            <div className="blog-img">
                                {/* imagen */}
                            </div>
                        </div>

                    </div>


                </div>
            </div>


            <CreditsSlider />
        </div>
    )
}

export default BlogPage