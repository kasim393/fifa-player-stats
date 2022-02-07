import React, { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import data from "../../assets/data.json"; 
const Home = () => {

  const [users, setUsers] = useState([])
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
      const loadUsers = async () => {
        setUsers(data.data)
        // console.log(data.data)
      }
      loadUsers()
  }, [])

  const onChangeHandler = (text) => {
    let matches =[]
    if(text.length > 0){
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`,"gi");
        return user.Name.match(regex)
      })
    }
    // console.log(matches);
    setSuggestions(matches)
    setText(text)
  }
  const resetInputField = () => {
    setText("");
    setSuggestions([])
  };

  return <div className='home'>
    <div className="input-container">
      <div className="input-search">
        <div>
        <input type="text" placeholder="Search..." onChange={e => onChangeHandler(e.target.value)} value={text} />
        <button onClick={resetInputField}>{text ? <i className="fas fa-times"></i> : <i className="fas fa-search"></i>}</button>
        </div>
    <div className="search-container">
      {suggestions && suggestions.slice(0,5).map((suggestion, i)=>(
        <div key={suggestion.ID}>
           <Link className='link' to={`/detail/${suggestion.ID}`}>
            <p>{suggestion.Name}</p>
          </Link>
          </div>
        ))}
    </div>
    </div>
    </div>
   
  </div>;
};

export default Home;
