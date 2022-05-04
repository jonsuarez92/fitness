const express = require('express')
const router = express.Router()
const { getSupps, setSupps, deleteSupps, updateSupps, showSupps } = require('../../controllers/api/supps')

const Supps = require('../../models/supps')

router.route('/').get(getSupps).post(setSupps)
// router.get("/", getNutruition) 
// router.post('/', setNutruition )

router.route('/:id').delete(deleteSupps).put(updateSupps)
//  Update
// router.put('/:id', updateSupps)
// delete
// router.delete('/:id', deleteNutruition)

//show
router.get('/:id', showSupps )



module.exports = router;