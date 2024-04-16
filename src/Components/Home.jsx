import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new Meat', body: 'lorem ipsum...', author: 'Luffy', id: 1 },
    { title: 'I made the meat', body: 'lorem ipsum...', author: 'Sanji', id: 2 },
    { title: 'Sword Tips (3-sword style)', body: 'lorem ipsum...', author: 'Zoro', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="content">
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
    </div>
    </div>
  );
}
 
export default Home;