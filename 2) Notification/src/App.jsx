import { useState } from 'react';
import './App.css'
import { PopUp } from './component/Popup';

function App() {
  let message = "This is a simple notification component for system.";
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
    <div className='app-container'>
    <h1>Notification</h1>

      <button className='btn' onClick={() => setIsVisible(true)}>Open</button>
      
      {isVisible && <PopUp setIsVisible={setIsVisible} message={message}/>}
    </div>
    </>
  )
}

export default App
