import { useState } from 'react'
import './App.css'

const charactersMock = [
{
id: 1,
name: "Rick Sanchez",
status: "Alive",
},
{
id: 2,
name: "Morty Smith",
status: "Alive",
},
];


const App = () => {

  const [myState, setMySatate] = useState ([charactersMock]);
  //const [characterList, setCharacterList] = React.useState(charactersMock);
  const [characterList, setCharacterList] = useState([charactersMock]);

  const characters = myState[0];
  const charactersSet = myState[1];

  

return 
<h1>Hello React!</h1>;

<div>
  {characterList.map((character) => (
  <p>{character.name}</p>
  ))}
</div>

};

export default App;
