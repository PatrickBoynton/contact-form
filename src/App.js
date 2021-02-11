import './App.css';
import { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={console.log("Hello world!")}>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Address</label>
        <input type="text" />
        <label>Phone Number</label>
        <input type="text" />
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
    contacts = [];
    this.setState({ contacts });
  }
  
  addContact(contact) {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
  }
  render () {
    return (
      <div className="App">
      <ContactForm/>
      <ContactList />
    </div>
    )
  }
}

export default App;
