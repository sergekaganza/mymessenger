import React, { useState, useEffect }  from 'react';
import './App.css';
import './Message.css';
import { Button, FormControl,InputLabel,Input} from '@material-ui/core/';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {

    // run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => doc.data)) 
    })
  }, []
  );
  useEffect(() => {
    // const userName = prompt('Please enter your userName')
    // if its blank inside [], this code runs ONCE when the app loads 
   setUsername(prompt('Please enter your name'))
    },[] ) // condition
 

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()


    })

    setMessages([
      ...messages, { username: username, text: input }
    ]);
    setInput('');
  }
  return (
    <div className= "App">
      <h1>Hello Clever Programmer !</h1>
      <h2>Welcome {username}</h2>
      <form>
      <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} />                
            <Button disabled={!input} variant="contained" color="primary" type='submit'onClick={sendMessage}>Send Message</Button>
            </FormControl>
      </form>
      
      
      {
      messages.map(message => (
        <Message username={username} message={message} />
        
        ))
}
  </div>
  );
}
export default App;
