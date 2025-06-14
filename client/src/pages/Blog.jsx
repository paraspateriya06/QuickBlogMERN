import React,{ useState, useEffect } from "react";
import Navbar from "../components/Navbar";  
import { assets, blog_data } from "../assets/assets"; // Assuming blog_data is an array of blog objects
import { useParams } from "react-router-dom";
import Moment from 'moment'; // For formatting dates

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const fetchBlogData = async () => {
   const data = blog_data.find((item) => item._id === id)
  setData(data) 
  }
  useEffect(() => {
    fetchBlogData();
  }, []);

return data? (
  <div className="relative">
    <img  src={assets.gradientBackground} alt="" className="absolute-top-50-z-1 opacity-50"/>

    <Navbar />
    <div>
    <p>Published on {Moment(data.createdAt).format('MMMM Do YYYY')} </p>
    <h1>{data.title}</h1>
    <h2>{data.subTitle}</h2>
    <p>Michel Brown</p>

    </div>

    <div>    

    </div>
  </div>
) : <div>Loading...</div>
}

export default Blog;


//1:31:36
