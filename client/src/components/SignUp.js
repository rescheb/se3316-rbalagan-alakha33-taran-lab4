import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

 
export default function Signup() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const name = useRef()
   const passwordConfirmRef = useRef()
   const {signup} = useAuth()
   const [error,setError] = useState('')
   const [loading, setLoading] = useState(false)
   let g;

   const [username1, setUsername1] = useState('');


 



const postLoginInfo = () => {

   
}
 
 
   async function handleSubmit(e){
       e.preventDefault()
       if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return setError('Passwords do not match')
       }
       try{
           setError("")
           setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)

           fetch("http://localhost:9000/playlist/numuser", { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
           .then(res => res.json())
           .then(data => {
    
               console.log(JSON.stringify(data));
               console.log(JSON.stringify(data).split(":")[1].split("}")[0]);
               if(JSON.stringify(data).split(":")[1].split("}")[0]==0)
               {
                console.log("Entered")
                console.log(name);
                fetch("http://" + window.location.hostname + ':9000/playlist/logininfo', {method: "POST", body: JSON.stringify({"email": emailRef.current.value, "password": passwordRef.current.value, "is_Admin": 1, "username": username1}), headers: new Headers({'Content-Type': 'application/json'})})
                .then(res => res.json())
                .then(data => {
                    
                })
                .catch(err => {
                    console.log(err)
                })
    
               }
               else
               {
                console.log("Entered")
                fetch("http://" + window.location.hostname + ':9000/playlist/logininfo', {method: "POST", body: JSON.stringify({"email": emailRef.current.value, "password": passwordRef.current.value, "is_Admin": 0, "username": username1}), headers: new Headers({'Content-Type': 'application/json'})})
                .then(res => res.json())
                .then(data => {
                    
                })
                .catch(err => {
                    console.log(err)
                })
               }


           })
           .catch(err => { console.log(err) })
           sendEmailVerification(auth.currentUser)
       } catch{
           setError ('Failed to create an account')
       }
       setLoading(false)
   }
 
 
 return (
   <>
       <Card>
           <Card.Body>
               <h2 className = "text-center mb-4">Sign Up</h2>
               {error && <Alert variant = "danger">{error}</Alert>}
               <Form onSubmit = {handleSubmit}>
                    <Form.Group id = "name">
                       <Form.Label>Name</Form.Label>
                       <Form.Control type = "name" ref = {name}required value={username1} onChange={(e) => setUsername1(e.target.value)} />
                   </Form.Group>
                   <Form.Group id = "email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type = "email" ref = {emailRef} required  />
                   </Form.Group>
                   <Form.Group id = "password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type = "password" ref = {passwordRef} required />
                   </Form.Group>
                   <Form.Group id = "password-confirm">
                       <Form.Label>Password Confirmation</Form.Label>
                       <Form.Control type = "password" ref = {passwordConfirmRef} required />
                   </Form.Group>
                   <Button onClick={postLoginInfo}  disabled = {loading} className = "w-100 mt-3" type = "submit">Sign Up</Button>
               </Form>
           </Card.Body>
       </Card>
       <div className = "w-100 text-center mt-2">
           Already have an account? <Link to = "/login">Log In</Link>
       </div>
   </>
 )
 }
 
