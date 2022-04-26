import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButoonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButoonWrapper>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButoonWrapper = styled.div`
  padding-left: 8px;
`;
