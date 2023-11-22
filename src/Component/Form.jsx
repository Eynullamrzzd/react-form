import React from 'react'
import './Form.css'



const Form = () => {

    const myForm = (e) =>{
        
        alert('Send message')

    }
  return (
    <div className='car'>
        <form onSubmit={myForm}>
        <label htmlFor="name">Name</label> <br/>
        <input type='text' id="name" required /> <br/>
        <label htmlFor="surname">Surname</label> <br/>
        <input type='text' id="surname" required/> <br/>

        <label htmlFor="phone"> Phone</label> <br/>
        <input type='number' id="phone" required/> <br/>

        <label htmlFor="email"> E-mail</label> <br/>
        <input type='email' id="email" required/> <br/>

        <label htmlFor="comment"> Comment</label> <br/>
        <input type='text' id="comment" required/> <br/>

        <button  required>Send</button>

        </form>


    </div>
  )
}

export default Form