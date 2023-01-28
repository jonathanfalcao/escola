const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <div>
                <h2>{title}</h2> 
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.age}</p>
                        <p>Departamento de {blog.discipline}</p><br/>
                    </div> 
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;