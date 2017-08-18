import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Modal, 
  Button,
} from 'react-bootstrap';
import CreateEventForm from '../containers/CreateEventForm.jsx';

class CreateEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal:false};
    this.openCreateEventModal = this.openCreateEventModal.bind(this);
    this.closeCreateEventModal = this.closeCreateEventModal.bind(this);
  }

  closeCreateEventModal () {
    this.setState({showModal:false});
  }

  openCreateEventModal () {
    this.setState({showModal:true});
  }

  render() {
    return (
    <div>
      <Button className="event-list-button btn btn-default" onClick={this.openCreateEventModal}>
        Create Event
      </Button> 
      <Modal show={this.state.showModal} onHide={this.closeCreateEventModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateEventForm handleCancelClick={this.closeCreateEventModal}/>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}

export default CreateEventModal;