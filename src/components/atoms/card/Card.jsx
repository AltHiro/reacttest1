import styled from "styled-components";

export const Card = (prpos) => {
  const { children } = prpos;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd opx 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
