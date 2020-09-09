const User=require('../model/User')

exports.addUser=async(req,res)=>{
   
   try { 
       
        await User.create(req.body);
        return res.status(200).json({
            message:'User Saved Successfully'
        })
   } catch (err) {
        return res.status(500).json({
            error:err.message
        })
   }
}

exports.getUsers=async(req,res)=>{
    try {
        const users=await User.find().sort({ created: -1 });
        return res.status(200).json(users)
        
    } catch (err) {
        return res.status(500).json({
            error:err
        })
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json({
            message:'User Deleted Successfully'
        })
    } catch (err) {
        res.status(500).json({
            error:err
        })
    }
}