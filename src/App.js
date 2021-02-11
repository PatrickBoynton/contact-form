import './App.css';
import { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    this.props.addContact(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" value={this.state.firstName} onChange={this.handleInput}/>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" value={this.state.lastName} onChange={this.handleInput}/>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={this.state.address} onChange={this.handleInput}/>
        <label htmlFor="phone-number">Phone Number</label>
        <input type="text" id="phone-number" name="phone-number" value={this.state.phoneNumber} onChange={this.handleInput}/>
        <button type="submit">Add Contacts</button>
      </form>
    )
  }
}


  function ContactList(props) {
    const contacts = props.contacts?.map((contact, index) => (
      <li>
        <h2>{contact["first-name"]}</h2>
        <h2>{contact["last-name"]}</h2>
        <p>{contact.address}</p>
        <p>{contact["phone-number"]}</p>
      </li>
    ))
    return (
      <ul>
        {contacts}
      </ul>
    )
  }


class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  componentDidMount() {
    const contacts = [];
    this.setState({ contacts });
  }

  addContact(contact) {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }

  render () {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    return (
      <div className="App">
      <ContactForm addContact={this.addContact}/>
      <ContactList contacts={contacts}/>
    </div>
    )
  }
}

export default App;
