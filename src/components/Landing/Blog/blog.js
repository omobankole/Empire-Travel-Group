import classes from "./blog.module.css";
import blog1 from "../../../assets/images/Landing/blog1.png";
import blog2 from "../../../assets/images/Landing/blog2.png";
import blog3 from "../../../assets/images/Landing/blog3.png";

const Blog = () => {
    return ( 
        <div className={classes.main}>
            <h3>Recent Blog</h3>
            <div className={classes.allBlog}>
                <div className={classes.blogImage}>
                    <img src={blog1} alt="blog" className={classes.image} />
                    <p>Exciting things to know about kigali, Rwanda</p>
                </div>
                <div className={classes.blogImage}>
                    <img src={blog2} alt="blog" className={classes.image} />
                    <p>Activities to get you in the back to school mindset.</p>
                </div>
                <div className={classes.blogImage}>
                    <img src={blog3} alt="blog" className={classes.image} />
                    <p>Things to know about an exciting trip to NASA.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;