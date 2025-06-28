export const addBlog = async (req,res) =>{
    try{
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
        const imageFile =  req.file;

   // check if all fields are present
    if(!title || !description || !category || !imageFile) {
        return res.JSON({success : false, message :"Missing Required Fields" })
    }


    }
    catch(error){

    }
}

// 4:15:20