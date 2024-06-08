import { useEffect, useState } from "react";
import BlogList from "../blog/BlogList";

const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                   throw Error('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then((data)=>{
                setBlogs(data)
                setIsPending(false)
            })
            .catch((error) => {
                setError(error.message)
                setIsPending(false)

            })
    }, 1000)

}, [])

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div> Loading... </div> }
        {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
    </div>
  );
}
 
export default Home;