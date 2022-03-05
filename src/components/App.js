import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  function searchChange (newSearch){
    setSearch(newSearch)
  }

  const filteredList = listings.filter(listing => listing.description.includes(search))

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listings => setListings(listings))
  }, [])

  function handleDelete(id){
    fetch("http://localhost:6001/listings/${id}", {
      method: 'DELETE'
    })
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }
  return (
    <div className="app">
      <Header searchChange={searchChange} search={search} />
      <ListingsContainer filteredList={filteredList} search={search} listings={listings} setListings={setListings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
