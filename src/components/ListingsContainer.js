import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, handleDelete, search, filteredList}) {
  return (
    <main>
      <ul className="cards">
        {filteredList.map((listing) => (
          <ListingCard key={listing.id} listing={listing} setListings={setListings} handleDelete={handleDelete}/>
        ))}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
