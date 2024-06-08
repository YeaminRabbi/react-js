import { useEffect, useState } from "react";
import BlogList from "../blog/BlogList";

const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('Jellyfish');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then((data)=>{
            setBlogs(data)
        })

  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} */}
      {/* <button onClick={() => setName('Tushar')}>change name</button>
      <p>{name}</p> */}
    </div>
  );
}
 
export default Home;