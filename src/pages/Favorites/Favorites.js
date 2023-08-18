import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import LoadingCard from "../../components/Loading/LoadingCard";
import Colors from "../../styles/Colors";
import { VerifyPokemons } from "../../functions/storage";

const Favorites = ({ history, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    localStorage.removeItem("pokedex_pokemons");
    setLoading(true);

    // Retrieve favorite cards from localStorage
    const favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== "user" && !key.startsWith("google_oauth_")) {
        const cardData = JSON.parse(localStorage.getItem(key));
        favorites.push(cardData);
      }
    }

    setFavoriteCards(favorites);
    setLoading(false);
  }, []);

  return (
   <Container fluid>
      <div className="fav-container">
        <h1
        onClick={() => history.push("/")}
        style={{ cursor: "pointer", color: Colors.red }}
        >Favorite Pokémon</h1>
        {favoriteCards.length > 0 ? (
               
                <Row>
            {favoriteCards?.map((card, index) => (
                <Col key={index}  md={4} lg={3} xl={3}>
              <PokeCard
                name={card.name}
                id={card.id}
                types={card.types}
                click={true}
                user={false}
              />
                </Col>
            ))}
          </Row>

        ) : (
          <p>No favorite Pokémon yet.</p>
        )}
      </div>
    </Container>
  );
};

export default Favorites;
