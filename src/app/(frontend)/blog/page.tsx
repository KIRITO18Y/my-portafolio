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
                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default BlogPage