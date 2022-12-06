const express = require("express")
const router = express.Router()
const ticketController = require("../Controllers/ticketController")

router.post('/', ticketController.createTicket)
router.get('/', ticketController.getTickets)
router.get('/:id', ticketController.getATicket)
router.put('/:id', ticketController.updateTicket)
router.delete('/:id/cancel', ticketController.deleteTicket)
router.delete('/tickets', ticketController.deleteAllTickets)

module.exports = router