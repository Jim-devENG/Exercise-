import React, {useState} from 'react'

import { Button, Modal, ModalBody } from 'react-bootstrap';

export default function ModalDialog({showprop, closeprop, note, saveNote, handleChange}) {
  

    return (
      <>
     
        <Modal show={showprop} onHide={closeprop}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex note-title">
                <input type="text" onChange={handleChange}  name="title" className="form-control" placeholder="Title" value={note.title}/>
              </div><br/>
              <span className="validation-text" />
            </div>
            <div className="col-md-12">
              <div className="d-flex note-description">
                <textarea onChange={handleChange} name="description" className="form-control" placeholder="Description" value={note.description} rows={3} />
              </div>
              <span className="validation-text" />
            </div>
          </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeprop}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNote}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}
