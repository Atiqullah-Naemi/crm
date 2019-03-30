import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Container, Button, Table, Row, Col } from 'reactstrap'
import { getClients, deleteClient } from '../../actions/clients'
import AddEditClient from './AddEditClient'

class Clients extends Component {
  state = {
    modal: false
  }

  componentDidMount() {
    this.props.getClients()
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <button
              onClick={this.toggle}
              className="btn btn-info float-right" style={{marginTop: '30px', marginBottom: '30px'}}>
              Create New Client
            </button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Postcode</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.clients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>{client.city}</td>
                <td>{client.state}</td>
                <td>{client.postcode}</td>
                <td>
                  <button
                    onClick={this.props.deleteClient.bind(this, client.id)}
                    className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddEditClient
        isOpen={this.state.modal}
        toggleModal={this.toggle} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clientsReducer.clients
})

export default connect(mapStateToProps, {getClients, deleteClient})(Clients)