const express = require("express")
const router = express.Router()
const staffController = require("../Controllers/staffController")

router.post('/', staffController.createStaff)
router.get('/', staffController.getStaffs)
router.get('/:id', staffController.getAStaff)
router.put('/:id', staffController.updateStaff)
router.delete('/:id/cancel', staffController.deleteStaff)
router.post('/login', staffController.loginStaff)

module.exports = router