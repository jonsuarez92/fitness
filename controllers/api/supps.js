const Supp = require('../../models/supps')
//getNutruition
//@route get/api/nutruition
//assess private admin

const getSupps = (req,res)=>{
    Supp.find({}, (err, foundSupps) => {
        if (!err) {
          res.status(200).json(foundSupps)
        } else {
          res.status(400).json(err)
        }
      })
}
//set Nutruition
//@route post/api/nutruition
//assess private admin

const setSupps = async (req,res)=>{
    try {
        const { body } = req
        const createdSupps = await Supp.create(body)
        res.status(200).json({ message: "Item Created!", createdSupps })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//getNutruition
//@route update/api/nutruition/:id
//assess private admin

const updateSupps = (req,res)=>{
    const {body} = req 
    Supp.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedSupps) => {
        if (!err) {
          res.status(200).json(updatedSupps)
        } else {
          res.status(400).json(err)
        }
      })
}
//getNutruition
//@route delete/api/nutruition/:id
//assess private admin

const deleteSupps = (req,res)=>{
    Supp.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted Supps"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showSupps = (req,res)=>{
    Supp.findById(req.params.id, (err, superMan)=>{
        if (!err) {
            res.status(200).json({message:'here the show', superMan})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getSupps,
    setSupps,
    updateSupps,
    deleteSupps,
    showSupps
}