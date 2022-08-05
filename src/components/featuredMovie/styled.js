import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

export const DescriptionCard = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 45%;
  height: 170px;
  
`;
