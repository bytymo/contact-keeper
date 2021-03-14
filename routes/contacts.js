const express = require('express')
const router = express.Router()

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (_, res) => {
  res.send('Get all contacts')
})

// @route   POST api/contacts
// @desc    Auth user and get token
// @access  Private
router.post('/', (_, res) => {
  res.send('Add contact')
})

// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put('/:contactId', (_, res) => {
  res.send('Update contact')
})

// @route   PUT api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/:contactId', (_, res) => {
  res.send('Delete contact')
})

module.exports = router
