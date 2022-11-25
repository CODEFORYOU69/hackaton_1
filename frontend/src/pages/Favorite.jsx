import React, { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
import "../style/favorite.css";

function Favorite() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    /* if something in the park list  of local storage, split and stock it  in parkId or gameID = [] */
    const parkId = window.localStorage.parks
      ? window.localStorage.parks.split(",")
      : [];
    // pour chaque id dans parkId,faire un fetch
    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < parkId.length; i++) {
      fetch(`https://tp.arendz.nl/parks/${parkId[i]}`)
        .then((res) => res.json())
        .then((results) => setListData((data) => [...data, results]));
    }
  }, []);
  return (
    <div>
      <h2 className="favorite-h2">Favoris</h2>
      <div className="favorite-card">
        {listData.length > 0 ? (
          listData.map((park) => <FavoriteCard park={park} key={park.id} />)
        ) : (
          <h3>Pas de favoris !</h3>
        )}
      </div>
    </div>
  );
}

export default Favorite;
