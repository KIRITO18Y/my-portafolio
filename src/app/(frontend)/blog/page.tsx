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
                <div className='card-header'>
                    <div className='card-content'>
                        <h2 className='blog-title'>Primeros pasos en payload CMS </h2>
                        <p className='blog-description'>Si ya has escuchado hablar de playload CMS
                            y te llamo la atencion te enseño los paso basico para iniciar a  usarlo
                        </p>
                    </div>
                    <div className='blog-img'>
                        Imagen del blog
                    </div>
                </div>
            </div>

            <CreditsSlider />
        </div>
    )
}

export default BlogPage