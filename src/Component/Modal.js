import React, { useState } from 'react'

export default function Modal() {

    const [Contacts, setContacts] = useState({
        name: "",
        email: "",
        designation: "",
        location: "",
        image: "",
        phone: ""
    })

    const handleChange = (e) =>{

        setContacts({...Contacts, [e.target.name]: e.target.value})

    }

    const AddContact = () =>{

        if (Contacts.email==='' || Contacts.name===''|| Contacts.location===''|| Contacts.designation===''||Contacts.phone===''||Contacts.image===''){ 

            alert('Please Fill up all the Required Fields')
        }else{

            

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(Contacts),
                redirect: 'follow'
                };
        
                fetch("http://localhost:8000/api/contactsApp", requestOptions)
                .then(response => response.json())
                .then(result =>{
                        if(result){
                            alert('Contact Added Successfully.');
                            setContacts({
                                name: "",
                                email: "",
                                designation: "",
                                location: "",
                                image: "",
                                phone: ""
                            })

                            
                        }
                        
                    }
                 )
                .catch(error =>{
                  alert('Something went wrong! Please check your internet connection....');
                     console.log('error', error)
                
                });

        }

       
    
    }


    return (
        <div>
      
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="name" value={Contacts.name} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="email" className="form-control" name="email" value={Contacts.email} onChange={handleChange} placeholder='Email'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="designation" value={Contacts.designation}  onChange={handleChange} placeholder='Designation'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="phone" value={Contacts.phone}   onChange={handleChange} placeholder='Phone'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                   
                </div>
            

                <div className="mb-3">
                   
                    <input type="text" className="form-control" name="image" value={Contacts.image}  onChange={handleChange} placeholder='Add Picture Url'  id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                   
                    <input type="text" className="form-control" name="location" value={Contacts.location}  onChange={handleChange} placeholder='Location'  id="exampleInputPassword1" />
                </div>
               
               
                

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                <button type="button" onClick={AddContact} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
