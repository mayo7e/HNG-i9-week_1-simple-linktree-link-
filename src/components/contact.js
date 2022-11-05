import React from "react"



  const myName = "Mayowa"

export default function Contact (){
    const [formData, setFormData] = React.useState(
      {
          firstName: "", 
          lastName: "", 
          email: "",
          typeMessage: "", 
          isUseData: true,
          
      }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

function handleSubmit(event) {
 
  console.log(formData)
}




    return (
     
       
      <div class="container">
      <h1>Contact Me</h1>
        <h3>Hi there, contact me to ask me about anything you have in mind.</h3>
              <form id="name_flex" >
                          <label for="first_name" >First name </label>
                          <input
                              type="text"
                              id = "first_name"
                              placeholder="Enter your first name"
                              onChange={handleChange}
                              name="firstName" 
                              value={formData.firstName}
                              
                          />
                
                 
                          <label for="last_name" >Last name</label>
                          <input
                              type="text"
                              id = "last_name"
                              placeholder="Enter your last name"
                              onChange={handleChange}
                              name="lastName"
                              value={formData.lastName}
                          />
                    </form>
        
          <form id="data_form" onSubmit={handleSubmit} >

                          <label for="email" >Email</label>
                          <input
                              type="email"
                              id = "email" 
                              placeholder="Enter your Email address" 
                              onChange={handleChange} 
                              name="email"  
                              value={formData.email}
                          />
                    
                
                          <label for="message" >Message</label>
                          <textarea
                              value={formData.message} 
                              type="text"
                              id = "message"
                              placeholder="Send me a message and i'll re[ly ypu as soon as possible"
                              onChange={handleChange} 
                              name="typeMessage" 
                              rows="10"
                              cols="50"
                          />
                    
                    
                          <input
                              type="checkbox"
                              id = "isUsaData" 
                              onChange={handleChange}  
                              name="isUseData"
                              checked={formData.isUseData}
                          />
                          <label for="checkbox" >You agree to prividing your data to {myName} who may contact you.</label>
                    
               <br /><br />

                <button id="btn__submit" >Send message</button>


          </form>
        </div>
        
      
    )
  }