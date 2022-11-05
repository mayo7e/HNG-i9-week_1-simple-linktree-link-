<form onSubmit={handleSubmit} >
                <section>
                          <label for="first_name" >First name</label>
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
                </section>
                <section>
                          <label for="email" >Email</label>
                          <input
                              type="email"
                              id = "email" 
                              placeholder="Enter your Email address" 
                              onChange={handleChange} 
                              name="email"  
                              value={formData.email}
                          />
                    
                </section>
                <section>
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
                    
                </section>
                <section>
                          <input
                              type="checkbox"
                              id = "isUsaData" 
                              onChange={handleChange}  
                              name="isUseData"
                              checked={formData.isUseData}
                          />
                          <label for="checkbox" >You agree to prividing your data to {myName} who may contact you.</label>
                    
                </section>

                <button id="btn__submit" >Send message</button>


          </form>