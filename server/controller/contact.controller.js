import Contact from "../models/contact.model.js";
import AppError from "../utils/error.util.js";
const contactdata = async(req,res,next) =>{
    
     const {Name,email,Phone,message} = req.body;

     if(!Name || !email || !Phone)
     {
         return next(new AppError("All fields are required",400));
     }

     const contact = await Contact.create({
         Name,
         email,
         Phone,
         message
     });

     if(!contact)
     {
         return next(new AppError("Contact Message failed,please try again",400));
     }
     
        res.status(201).json({
            success:true,
            message:"Contact Message sent successfully",
            contact
        });

    

    await contact.save();

};

const getallcontacts = async(req,res,next) =>{
    const contacts = await Contact.find();
    if(!contacts)
    {
        return next(new AppError("No contacts found",404));
    }
    res.status(200).json({
        success:true,
        contacts
    });
}
export { contactdata, getallcontacts };