import { Schema,model } from "mongoose";

const contactSchema=new Schema({
    Name:{
        type:String,
        required:[true,"Name is Requird"],
        minLength:[5,"minlength is 5 charecter"],
        maxLength:[50,"maxlength is 50 charecter"],
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is Requird"],
        maxlength:[50,"maxlength is 50 charecter"],
        lowercase:true,
        trim:true,
        Match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    Phone:{
        type:String,
        required:[true,"Phone number is Requird"],
        minLength:[10,"minlength is 10 charecter"],
        Match: [/^\d{10}$/]
    },
    message:{
        type:String
    }
},
{
    timestamps:true
});

const Contact = model("Contact",contactSchema);

export default Contact;