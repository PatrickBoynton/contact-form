import './App.css';
import { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={console.log("Hello world!")}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" value={this.state.firstName}/>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" value={this.state.lastName}/>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={this.state.address}/>
        <label htmlFor="phone-number">Phone Number</label>
        <input type="text" id="phone-number" name="phone-number" value={this.state.phoneNumber}/>
        <button type="submit">Add Contacts</button>
      </form>
    )
  }
}

class ContactList extends Component {
  render() {
    return (
      <li>
        <h2>First Name</h2>
        <h2>Last Name</h2>
        <p>Address</p>
        <p>Phone Number</p>
      </li>
    )
  }
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
    return (
      <div className="App">
      <ContactForm addContact={this.addContact}/>
      <ContactList contacts={this.state?.contacts}/>
    </div>
    )
  }
}

export default App;
