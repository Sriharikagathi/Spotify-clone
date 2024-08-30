import { useEffect, useState } from 'react';
import './App.css';
import MusicComponent from './MusicComponent';

function App() {
  const[data,setData]=useState("");
  const fetchData = async () => {
    await fetch('https://cms.samespace.com/items/songs').then((response)=>{
      return response.json();
    }).then((data)=>{
      setData(data.data);
    })
  }
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      { data && data.map((item)=>{
        console.log(item.id);
        return (
          <div key={item.id}>
            <img src={`https://cms.samespace.com/assets/${item.cover}`}/>
          </div>
        )
      })  }
      <MusicComponent></MusicComponent>
    </div>
  );
}
export default App;