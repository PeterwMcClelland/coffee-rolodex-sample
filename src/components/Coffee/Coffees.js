import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Coffee from "./Coffee";
import "./Coffee.css";

const URL = process.env.NODE_ENV === "production" ? "https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees" : "http://localhost:3000/api/coffees";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data);
};

const deleteHandler = async(id, setCoffees) => {
  if (window.confirm('Are you sure you want to delete?')) {
    await axios.delete(`https://coffee-rolodex-sample-557eeaac3267.herokuapp.com/api/coffees/${id}`)
    .then(res=>res.data)
    .then(()=> fetchHandler().then(data => setCoffees(data.coffees)));
  }
}

const Coffees = () => {
  const [coffees, setCoffees] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      fetchHandler().then(data => setCoffees(data.coffees));
  }, []);
  
  if (coffees) {
      console.log(coffees);
  }

  return <div className='background'>
    <div className='search-bar'>
      <input
          className='search-txt'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
      />
      </div>
      <ul>
          {coffees && coffees.filter(coffee => 
              coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              coffee.brand.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((coffee, i) =>(
          <li key={i}>
              <Coffee coffee={coffee} deleteHandler={()=>deleteHandler(coffee._id, setCoffees)} />
          </li>
          ))} 
      </ul>
  </div>;
};


export default Coffees;
