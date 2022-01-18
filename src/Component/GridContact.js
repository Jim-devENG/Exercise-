import React from 'react'
import EditModal from './EditModal'
import Modal from './Modal'

export default function GridContact({img,name,designation,email, location, phone, showModal}) {
    return (
        <div className="grid-card">
        <div className="grid-card-img">
            <img className="profile-pics" src={img} alt="" />
        </div>
        <h3 className="grid-name">{name}</h3>
        <h3 className="grid-designation" >{designation}</h3>
        <div className="row">
            <div className="col-lg-6 grid-email">Email:</div>
            <div className="col-lg-6 grid-tag">{email}</div>
        </div>
        <div className="row">
            <div className="col-lg-6 grid-email">Location:</div>
            <div className="col-lg-6 grid-tag">{location}</div>
        </div>
        <div className="row">
            <div className="col-lg-6 grid-email">Phone</div>
            <div className="col-lg-6 grid-tag">{phone}</div>
        </div>

     
        <div className="col-lg-12 fun-icon"><p><i onClick={showModal} data-bs-toggle="modal" data-bs-target="#MexampleModal"  className="fas fa-pencil-alt pen-grid" /><i  className="fas fa-user-minus ps-2 pen-grid" /></p></div>
        <div id='myModal'>
            <Modal/>
        </div>
        <div id='EditModal'>
        <EditModal/>
        </div>
    </div>
    )
}
