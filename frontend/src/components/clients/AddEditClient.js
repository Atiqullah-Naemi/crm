import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form, 
  FormGroup, 
  Input, 
  FormText } from 'reactstrap'
  import { addClient } from '../../actions/clients'

class AddEditClient extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postcode: ''
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modal: nextProps.isOpen
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { name, email, address, city, state, postcode } = this.state
    const client = { name, email, address, city, state, postcode }

    this.props.addClient(client)

    this.setState({
      modal: !this.state.modal,
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      postcode: ''
    })
  }

  render() {
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.props.toggleModal} centered={true}>
          <ModalHeader toggle={this.props.toggleModal}>Create New Client</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input type="text" name="name" placeholder="Name"
                value={this.state.name}
                onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" placeholder="Email"
                value={this.state.email}
                onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="address" placeholder="Address"
                value={this.state.address}
                onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="city" placeholder="City"
                value={this.state.city}
                onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="state" placeholder="State"
                value={this.state.state}
                onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="postcode" placeholder="Postcode"
                value={this.state.postcode}
                onChange={this.onChange} />
              </FormGroup>
              <Button className="btn btn-info float-right">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default connect(null, { addClient })(AddEditClient)