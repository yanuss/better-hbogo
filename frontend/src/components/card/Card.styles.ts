import styled from "styled-components";
import Button from "components/button/button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3vmin 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  /* padding: 20px; */
  padding: 3vw;
  width: 100%;
`;

export const Title1 = styled.h1`
  /* font-size: 36px; */
  font-size: 4vmin;
  margin: 10px 0;
  font-weight: 300;
`;

export const Subtitle1 = styled.p`
  width: 100%;
  display: inline-block;
  margin: 10px 0;
  font-size: 18px;
`;

export const Title2 = styled.h2`
  font-size: 24px;
  margin: 0 0 10px;
  font-weight: 300;
  white-space: pre-wrap;
`;

export const Subtitle2 = styled.p`
  width: 100%;
  display: inline-block;
  font-size: 13px;
  margin-top: 10px;
  white-space: pre-wrap;
`;
export const ButtonBig = styled(Button)`
  font-size: 20px;
  border-radius: 6px;
  padding: 13px 30px;
  margin-top: 10px;
`;

export const Row = styled.div``;
