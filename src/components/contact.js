import React from "react"
import Footer from "../components/footer.js"



  const myName = "Mayowa Adeboye"


export default function Contact (){

    const [formData, setFormData] = React.useState(
      {
          firstName: "", 
          lastName: "", 
          email: "",
          typeMessage: "", 
          isUseData: false,
          
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
     
       
      // <div className="container">
         <div className="contact__container">
              <div className="contact_header">
                  <h1>Contact Me</h1>
                    <h3>Hi there, contact me to ask me about anything you have in mind.</h3>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className="name__container" >
                          <div className="form_details"  >
                                        <label for="first_name" >First name </label>
                                        <input
                                            type="text"
                                            id = "first_name"
                                            placeholder="Enter your first name"
                                            onChange={handleChange}
                                            name="firstName" 
                                            value={formData.firstName}
                                            required
                                        />
                          </div>
                        
                            <div className="form_details" >
                                  <label for="last_name" >Last name</label>
                                  <input
                                      type="text"
                                      id = "last_name"
                                      placeholder="Enter your last name"
                                      onChange={handleChange}
                                      name="lastName"
                                      value={formData.lastName}
                                      required
                                  />
                           </div>
                    </div>
                  
                    <div className="form_details"  >
                          <label for="email" >Email</label>
                          <input
                              type="email"
                              id = "email" 
                              placeholder="Enter your Email address" 
                              onChange={handleChange} 
                              name="email"  
                              value={formData.email}
                              required
                          />
                    </div>

                    <div className="form_details"  >
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
                              required
                          />
                    </div>
                    
                    <div className="form_checkbox_details"  >
                          <input
                              type="checkbox"
                              id = "isUsaData" 
                              onChange={handleChange}  
                              name="isUseData"
                              checked={formData.isUseData}
                              required
                              
                          />
                          <label for="checkbox" >You agree to providing your data to {myName} who may contact you.</label>
                    </div>
         
                          
                          <button id="btn__submit" >Send message</button>
                    </form>


        
                    <Footer />
          </div>
        // </div>
        
      
    )
  }