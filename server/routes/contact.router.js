import Router from "express";
import {contactdata, getallcontacts,} from "../controller/contact.controller.js";


const router = Router();

router.post("/contactus",contactdata);
router.get("/getallcontacts",getallcontacts);


export default router;