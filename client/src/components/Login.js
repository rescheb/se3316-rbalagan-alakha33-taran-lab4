import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link , useHistory} from 'react-router-dom'

 
export default function Login() {
   const emailRef = useRef()
   const passwordRef = useRef()

   const {login} = useAuth()
   //const {sendEmail} = useAuth()
   const [error,setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()


 
   async function handleSubmit(e){
       e.preventDefault()
       try{
           setError('')
           setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value)
           history.push("/")
       } catch{
           setError ('Failed to sign in')
       }
      
       setLoading(false)
   }
 
 
 return (
   <>
   <h1 className = "text-center mb-4">Music Playlist Web App</h1>
   <h5 className = "text-center mb-4">Welcome to the application, once you log in you will be able to Search, Create, and Delete Playlists!</h5>
       <Card>
           <Card.Body>
               <h2 className = "text-center mb-4">Log In</h2>
               {error && <Alert variant = "danger">{error}</Alert>}
               <Form onSubmit = {handleSubmit}>
                   <Form.Group id = "email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type = "email" ref = {emailRef} required />
                   </Form.Group>
                   <Form.Group id = "password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type = "password" ref = {passwordRef} required />
                   </Form.Group>
                   <Button disabled = {loading} className = "w-100 mt-3" type = "submit">Log In</Button>
               </Form>
            <div className = "w-100 text-center mt-2">
                <Link to ="/forgot-password">Forgot Password?</Link>
           </div>
           </Card.Body>
       </Card>
       <div className = "w-100 text-center mt-2">
           Need an Account? <Link to = "/signup">Sign Up</Link>
       </div>
       <div className = "w-100 text-center mt-2">
           Dont have an Account? <Link to = "/UnauthenticatedUser">Continue without Account</Link>
       </div>
       
   </>
 )
 }