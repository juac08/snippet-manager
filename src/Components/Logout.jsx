import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
    return (
        <div className='container' style={{height:'100vh',placeItems:'center'}}>
            <h1 style={{textAlign:'center',marginBottom:'1rem'}}>Succesfully Log out</h1>
            <h1 style={{textAlign:'center',marginBottom:'1rem'}}>Thanks</h1>
            <Link to='/'>
            <Button color='secondary' variant='contained'>Back to Home</Button>          
            </Link>
        </div>
    )
}

export default Logout
