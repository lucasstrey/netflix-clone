/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../../styled/FeaturedMovie.css";
import {
  FeaturedAddList,
  FeaturedButtons,
  FeaturedDescription,
  FeaturedHorizontal,
  FeaturedInfo,
  FeaturedName,
  FeaturedPoints,
  FeaturedSeasons,
  FeaturedVertical,
  FeaturedWatchButton,
  FeaturedYear,
  FeaturesGenres,
  Menu,
  MenuTitle,
  Section,
} from "./styled";

export default ({ item }) => {
  console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  // comment
  return (
    <Section url={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}>
      <Menu opa={true}>
        <MenuTitle>Netflix</MenuTitle>
      </Menu>
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints> {item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear> {firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {" "}
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}{" "}
            </FeaturedSeasons>
            <FeaturedDescription>
              {limitCaracter(item.overview)}
            </FeaturedDescription>
            <FeaturedButtons>
              <FeaturedWatchButton href={`/watch/${item.id}`}>
                {" "}
                ➤ Assistir
              </FeaturedWatchButton>
              <FeaturedAddList href={`/list/add/${item.id}`}>
                + Minha Lista
              </FeaturedAddList>
            </FeaturedButtons>
            <FeaturesGenres>
              <strong>Gêneros:</strong> {genres.join(", ")}
            </FeaturesGenres>
          </FeaturedInfo>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </Section>
  );
};

const limitCaracter = (value) => {
  console.log(value.length);
  if (value.length > 350) {
    return `${value.slice(0, 351)}...`;
  } else {
    return value;
  }
};
