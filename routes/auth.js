const express = require('express')
const passport = require('passport')
const router =  express.Router()
 
// @dex  Auth with Google
// @route GET /
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc  Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/' }), (req,res) => {
    res.redirect('/dashboard')
})

// @desc Logout User
// @route /auth/logout
router.get('/logout', (req,res, next) => {
    req.logout((error) => {
        if (error){return next(error)}
    })// within passport middleware once we logged in we have logout method within our req object
    res.redirect('/')
})

module.exports = router