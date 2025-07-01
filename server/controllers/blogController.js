import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

// Controller to add a new blog
export const addBlog = async (req, res) => {
  try {
    // Destructure fields from the incoming JSON payload inside `req.body.blog`
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file; // Uploaded image file from multer

    // Validate required fields
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing Required Fields" });
    }

    // Read the uploaded image file into a buffer
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Generate an optimized image URL using transformations
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },   // Automatically adjust image quality
        { format: "webp" },    // Convert image to WebP format
        { width: "1280" },     // Resize width
      ],
    });

    const image = optimizedImageUrl; // Final image URL to store in DB

    // Create a new blog in the database
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "blog added Successfully" });
  } catch (error) {
    // Catch and return any server-side errors
    res.json({ success: false, message: error.message });
  }
};

// Controller to get all published blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }); // Only fetch published blogs
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to get a blog by its ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId); // Find blog using ID
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to delete a blog by ID
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id); // Remove blog from DB

    res.json({ success: true, message: "Blog deleted Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to toggle blog's published status
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id); // Find blog

    blog.isPublished = !blog.isPublished; // Toggle publish state
    await blog.save(); // Save changes

    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to add a comment to a blog
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    await Comment.create({ blog, name, content }); // Create new comment
    res.json({ success: true, message: "comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to get approved comments for a blog
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;

    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 }); // Sort by most recent first

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


