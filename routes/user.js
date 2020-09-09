const router=require('express').Router()

const {addUser,getUsers,deleteUser}=require('../controllers/user')

router.post('/',addUser)

router.get('/',getUsers)

router.delete('/:userId',deleteUser)

module.exports=router