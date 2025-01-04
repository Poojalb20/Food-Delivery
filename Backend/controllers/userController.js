const userModel=require('../model/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const validator=require('validator')

const createToken=(id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_TOKEN_SECRET
    )
}

const loginUser=async(req,res)=>{
        const {email,password} = req.body
        try{
            const user = await userModel.findOne({email})
            if(!user)
                return res.status(400).json({success:false,message:"Invalid email or password"})
                const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch)
                return res.status(400).json({success:false,message:"Invalid email or password"})
            const token = createToken(user._id)
            res.status(200).json({success:true,token})
        }catch(error){
            
        }
    }



const registerUser=async(req,res)=>{
    console.log('check')
    const {name,password,email} =req.body
    console.log(name,password,email)
    try{
        const exists=await userModel.findOne({email})
        console.log(exists)
        if(exists)
             return res.status(400).json({success:false,message:"Email already exists"})
        console.log('check')
            if(!validator.isEmail(email))
                return res.status(400).json({success:false,message:"Invalid Email"})

            if(password.length<6)
                return res.status(400).json({success:false,message:"give a strong password"})
            console.log(password)
            const hashedPassword=await bcrypt.hash(password,10)
            const user=await userModel.create({name,email,password:hashedPassword})
            const token=createToken(user._id)
            res.status(201).json({success:true,token})
        
    }catch(error){
            console.log(error)
            res.status(500).json({success:false,message:"Internal server error"})
    }
}

module.exports={loginUser,registerUser}