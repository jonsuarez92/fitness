const WorkOuts = require('../../models/workouts')
//getNutruition
//@route get/api/nutruition
//assess private admin

const getWorkOut = (req,res)=>{
    WorkOuts.find({}, (err, foundWorkOuts) => {
        if (!err) {
          res.status(200).json(foundWorkOuts)
        } else {
          res.status(400).json(err)
        }
      })
}
//set Nutruition
//@route post/api/nutruition
//assess private admin

const setWorkOut = async (req,res)=>{
    try {
        const { body } = req
        const createdWorkOut = await WorkOuts.create(body)
        res.status(200).json({ message: "Item Created!", createdWorkOut })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//getNutruition
//@route update/api/nutruition/:id
//assess private admin

const updateWorkOut = (req,res)=>{
    const {body} = req 
    WorkOuts.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedWorkOut) => {
        if (!err) {
          res.status(200).json(updatedWorkOut)
        } else {
          res.status(400).json(err)
        }
      })
}
//getNutruition
//@route delete/api/nutruition/:id
//assess private admin

const deleteWorkOut = (req,res)=>{
    WorkOuts.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted workout"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showWorkOut = (req,res)=>{
    WorkOuts.findById(req.params.id, (err, workOut)=>{
        if (!err) {
            res.status(200).json({message:'here the show', workOut})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getWorkOut,
    setWorkOut,
    updateWorkOut,
    deleteWorkOut,
    showWorkOut
}  