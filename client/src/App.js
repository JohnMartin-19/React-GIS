import {useEffect} from 'react'
import './App.css';
import google from 'react';


function App() {
  function handleCallbackResponse(response){
    console.log('Encoded JWT ID token' + response.credential)
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:'899184436932-vg2m7gumh4ppqa1f5j56i5kubhtt8pmp.apps.googleusercontent.com',
      callback: handleCallbackResponse

    });

    google.accounts.renderButton(
      document.getElementById('signInDiv'),
      {theme:'outline',size:'large'} // the element to render
    )
  },[])
  return (
    <div className="App">
      <div id='signInDiv'>
        
      </div>
    </div>
  );
}

export default App;
  