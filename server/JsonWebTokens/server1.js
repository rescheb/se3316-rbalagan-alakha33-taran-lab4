require('.dotenv').config()

const express = require ('express')
const { access } = require('fs')
const app = express()

const jwt = require('jsonwebtoken')
const { nextTick } = require('process')

app.use(express.json())

const posts = [{
    username: 'Kyle',
    title : 'Post 1'
},
{
    username: 'Jimmy',
    title : 'Post 2'
}

]


app.get('/posts' , authenticateToken, (req, res)=> {
    req.user
    //Makes sure that the user name matches with current signed in
    res.json(posts.filter (post => post.username === req.user.name))
})

app.post('/login', (req,res)=>{
    //Authenticate User

    const username = req.body.username
    const user = {name: user}

  const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken : accessToken})
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] 
   
    //If they have no access at all give 401 error.
    if(token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
      //You have acess but token is no longer valid.
        if(err) return res.sendStatus(403)
        req.user = user
        next()
})
    }

app.listen(4000)

