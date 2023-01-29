const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <div>
                <h2>{title}</h2> 
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.age} anos</p>
                        <p>Departamento de {blog.discipline}</p><br/>
                        <button>X</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;