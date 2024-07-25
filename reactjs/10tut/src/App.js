import ColorBoxItem from './ColorBoxItem';
import ColorTextItem from './ColorTextItem';
import {useState} from 'react';


function App() {

  const [color, setColor] = useState('');

  return (
    <div>
      <ColorTextItem 
        color={color}
        setColor={setColor}
      />
      <ColorBoxItem 
        color = {color ? color : 'Empty Value'}
      />
    </div>
  );
}

export default App;
