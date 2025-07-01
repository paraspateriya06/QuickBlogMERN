import Jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const adminLogin = async (req, res) => {
  try {
    // Destructure email and password from the request body
    const { email, password } = req.body;

    // Validate email and password against environment variables
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      // Return failure response for invalid credentials
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate a JWT token using the admin's email and secret
    const token = Jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d", // optional: sets token expiration (recommended)
    });

    // Return success response with the generated token
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    // Return failure response in case of any runtime error
    res.json({
      success: false,
      message: error.message,
    });
  }
}


export const getAllBlogsAdmin = async (req,res)=> {
try{

  const blogs = await Blog.find({}).sort({createdAt:-1});
res.json({success: true, blogs})

} catch(error){

  res.json({
      success: false,
      message: error.message,
    }) 
}

}

export const getAllComments = async (req,res) => {
  try{
    const comments = await Comment.find({}).populate("blog").sort({createdAt:-1})
    res.json({success: true, comments});

  } catch(error){

    res.json({
      success: false,
      message: error.message,
    }) 

  }
}

export const getDashboard = async(req,res) =>{
  try {

    const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocument()
    const drafts = await Blog.countDocuments({isPublished: false})

    const dashboardData = {
      blogs, comments, drafts, recentBlogs
    }

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    }) 
    
  }

}

export const deleteCommentById = async (req,res)=> {
try {

  const{id} = req.body;
  await Comment.findByIdAndDelete(id);

  // Delete All comments Associated with Blog

  res.json({success: true, message:"Comment Deleted Successfully"})
  
} catch (error) {

  res.json({
      success: false,
      message: error.message,
    }) 
  
}

}
export const approveCommentById = async (req,res)=> {
try {

  const{id} = req.body;
  await Comment.findByIdAndUpdate(id,{isApproved: true});
  res.json({success: true, message: "Comment Updated Successfully"})
  
} catch (error) {

  res.json({
      success: false,
      message: error.message,
    }) 
  
}

}

