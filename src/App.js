import { useState } from 'react';
import './App.css';
import { Contact } from './components/contact/contact';
import { Navigation } from './components/navigation/navigation';
import { Profile } from './components/profile/profile';
import { Resume } from './components/resume/resume';

function App() {
  const [selectedtab, setSelectedtab] = useState(0);
  function getTabData() {
    switch (selectedtab) {
      case 0:
        return <Profile />
      case 1:
        return <Resume />
      case 2:
        return <Contact />
      default:
        return <Profile />
    }
  }
  return (
    <div className='app-container' style={{ flexDirection: `${selectedtab === 0 ? "column" : "column-reverse"}` }}>
      <div className='tab-section'>{getTabData()}</div>
      <Navigation selTab={selectedtab} setTab={setSelectedtab} />
    </div>
  );
}

export default App;
