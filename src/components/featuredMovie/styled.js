import styled, { css } from "styled-components";

export const Menu = styled.div`
z-index: 10;
  width: 100%;
  display: inline-block;
  height: 50px;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.opa ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)"};
  transition: 600ms;
  user-select: none;
`


export const MenuTitle = styled.div`
  margin-top: 5px;
  color: #e50914;
  font-size: 25px;
  margin-left: 30px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Section = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

export const FeaturedDescription = styled.div`
  font-size: 20px;
  color: #999;
  max-width: 45%;
  height: 165px;
  margin: 15px;
`;
export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 30%, transparent 70%);
`;
export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 25%, transparent 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 7px;
`;

export const FeaturedName = styled.div`
margin-top: 0%;
  font-size: 60px;
  font-weight: bold;
  user-select: none;
`;

const Pattern = css`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

export const FeaturedPoints = styled.div`
  ${Pattern}
  color: #46d369;
  margin: 0 0 7px 0;  
  user-select: none; 
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0 5px 0;
  user-select: none;
`;

export const FeaturedYear = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 3px 0;
  user-select: none;
`;
export const FeaturedSeasons = styled.div`
user-select: none;
`;

export const FeaturedButtons = styled.div`
  padding-top: 15px; ;
`;

export const FeaturesGenres = styled.div`
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`;

const PatternButton = css`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
`;

export const FeaturedWatchButton = styled.a`
  ${PatternButton}
  background-color: #fff;
  color: #000;
  :hover {
    opacity: 0.6;
  }
`;

export const FeaturedAddList = styled(FeaturedWatchButton)`
  background-color: #333;
  color: #fff;
`;
