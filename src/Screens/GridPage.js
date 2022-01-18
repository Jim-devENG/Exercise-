import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import Button from '../Component/Button'
import GridContact from '../Component/GridContact'
import ListContact from '../Component/ListContact'
import { UserContext } from '../Context/UserContext'

export default function GridPage() {

    const {ContactId, setContactId} = useContext(UserContext)
    const {Watch, setWatch} = useContext(UserContext)

    const showModal = () =>{
        document.getElementById("myModal").style.display = "block"
      }
    const EditModal = (id) =>{
        document.getElementById("EditModal").style.display = "block"
        setContactId(id)

      }

      
  const [Data, setData] = useState([])

  const fetch_contact = () =>{

    fetch("http://localhost:8000/api/fetch_contacts")
    .then(response => response.json())
    .then(result =>{
          
            setData(result);
        }
     )
    .catch(error =>{
      alert('Something went wrong! Please check your internet connection....');
         console.log('error', error)
    
    });
  }

  useEffect(() => {

    fetch_contact()
   
  }, [ContactId,Watch])

    return (
        <div>
          <div className="container">
                <div className="my-nav">
                  <h1>Contacts <span>| Apps . contacts</span></h1>
                </div>

                <div className="row nav-row">
                  <div className="col-lg-5 ">
                    <input type="text" className="search" placeholder='Search Contacts'/>
                    <i className="fas fa-search search-icon" />

                  </div>

                  <div className="col-lg-4"></div>
                  <div className="col-lg-1"> <button onClick={showModal}  data-bs-toggle="modal" data-bs-target="#exampleModal" className="contact-btn btn-1 "><i  className="fas fa-user-plus icon1" /></button></div>
                 
                  <Button
                  btn_style= "contact-btn btn-2"
                  btn_icon= "fas fa-list icon2"
                  link = "/"
                  />
                  <Button
                  btn_style= "contact-btn"
                  btn_icon= "fas fa-th-large icon3"
                  link = "/gridCard"
                />

                
                </div>
             
            <div className="row-grid">
            {
                Data.map((item, i) =>(
                    <GridContact
                    img = {item.image}
                    name = {item.name}
                    designation= {item.designation}
                    email = {item.email}
                    location= {item.location}
                    phone = {item.phone}
                    showModal={()=>EditModal(item.id)}
                />
                ))
            }
               
               
               
            
            </div>

              
              
           
             

              
          </div>
   
        </div>
    )
}
