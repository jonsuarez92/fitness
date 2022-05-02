const Nutruition = require('../../models/nutruition')
//getNutruition
//@route get/api/nutruition
//assess private admin

const getNutruition = (req,res)=>{
    Nutruition.find({}, (err, foundNutruition) => {
        if (!err) {
          res.status(200).json(foundNutruition)
        } else {
          res.status(400).json(err)
        }
      })
}
//set Nutruition
//@route post/api/nutruition
//assess private admin

const setNutruition = async (req,res)=>{
    try {
        const { body } = req
        const createdNutrution = await Nutruition.create(body)
        res.status(200).json({ message: "Item Created!", createdNutrution })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//getNutruition
//@route update/api/nutruition/:id
//assess private admin

const updateNutruition = (req,res)=>{
    const {body} = req 
    Nutruition.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedNutrution) => {
        if (!err) {
          res.status(200).json(updatedNutrution)
        } else {
          res.status(400).json(err)
        }
      })
}
//getNutruition
//@route delete/api/nutruition/:id
//assess private admin

const deleteNutruition = (req,res)=>{
    Nutruition.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted nutruition"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showNutruition = (req,res)=>{
    Nutruition.findById(req.params.id, (err, superMan)=>{
        if (!err) {
            res.status(200).json({message:'here the show', superMan})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getNutruition,
    setNutruition,
    updateNutruition,
    deleteNutruition,
    showNutruition
}