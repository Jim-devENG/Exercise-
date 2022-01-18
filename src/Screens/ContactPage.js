import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import Button from '../Component/Button'
import ListContact from '../Component/ListContact'
import { UserContext } from '../Context/UserContext'

export default function ContactPage() {
  const {ContactId, setContactId} = useContext(UserContext)
  const {Watch, setWatch} = useContext(UserContext)

  const [Search, setSearch] = useState("")

  const handleSearch = (e) =>{

    setSearch(e.target.value)
  }
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
  const delete_contact = (id) =>{

    fetch(`http://localhost:8000/api/delete/${id}`)
    .then(response => response.json())
    .then(result =>{
          
         
      setWatch(!Watch)

           
        }
     )
    .catch(error =>{
      alert('Something went wrong! Please check your internet connection....');
         console.log('error', error)
    
    });
  }

  useEffect(() => {

    fetch_contact()
   
  }, [Watch])
    return (
        <div>
          <div className="container">
                <div className="my-nav">
                  <h1>Contacts <span>| Apps . contacts</span></h1>
                </div>

                <div className="row nav-row">
                  <div className="col-lg-5 ">
                    <input type="text"  className="search" value={Search} onChange={handleSearch} placeholder='Search Contacts'/>
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
                <div className=" head-card">
                <div className="row">
                 
                    <div className="col-lg-4"> <h2 className="title">  <input className="checkbox" type="checkbox" />Name</h2></div>
                    <div className="col-lg-2"><h2 className="title">Email</h2></div>
                    <div className="col-lg-2"><h2 className="title">Location</h2></div>
                    <div className="col-lg-2"><h2 className="title">Phone</h2></div>
                    <div className="col-lg-2"><p><i className="fas fa-trash-alt trash" /></p>   </div>
                </div>
              
            </div>

            {
              Search !== "" ? (
                Data.filter(Data => (Data.name) == Search || (Data.designation) == Search || (Data.location) == Search  )
              
                .map((item, i) =>(
  
                  <ListContact
                  img = {item.image}
                  name = {item.name}
                  designation= {item.designation}
                  email = {item.email}
                  location= {item.location}
                  phone = {item.phone}
                  showModal={() =>EditModal(item.id)}
                  delete_contact={() =>delete_contact(item.id)}
                />
                ))
              ): (

                Data.map((item, i) =>(
  
                  <ListContact
                  img = {item.image}
                  name = {item.name}
                  designation= {item.designation}
                  email = {item.email}
                  location= {item.location}
                  phone = {item.phone}
                  showModal={() =>EditModal(item.id)}
                  delete_contact={() =>delete_contact(item.id)}
                />
                ))
              )

            
            }
           

           
           

           
             
            <br/><br/>
              
          </div>
   
        </div>
    )
}
