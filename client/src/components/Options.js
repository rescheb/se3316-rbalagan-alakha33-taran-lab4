import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link , useHistory} from 'react-router-dom'

export default function Options() {
    const emailRef = useRef()
    const passwordRef = useRef()
 
    const {login} = useAuth()
    //const {sendEmail} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  return (
    <div>
        <Card>
            <Card.Body>
            <h2 className = "text-center mb-4">Admin Access & More</h2>
            {error && <Alert variant = "danger">{error}</Alert>}
            <Link to="/privateplaylist" className = "btn btn-primary w-100 mt-3">Private Playlist</Link>
            <Link to="/privatedmca" className = "btn btn-primary w-100 mt-3">Private DMCA</Link>
            <Link to="/playlist" className = "btn btn-primary w-100 mt-3">Playlist</Link>
            <Link to="/documentation" className = "btn btn-primary w-100 mt-3">Documentation</Link>

            </Card.Body>
        </Card>
        
        <div className = "w-100 text-center mt-2">
        <Link to="/" className = "btn btn-danger w-50 mt-3">Back</Link>
        <br></br>
        <div className = "w-100 text-center mt-2">
          <Link to = "/dmcanotice">DCMA Notice</Link>
       </div>
       </div>
       </div>
  )
}
