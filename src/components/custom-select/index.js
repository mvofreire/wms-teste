import React from "react";
import styled from "styled-components";
import { SelectBox } from "@hbsis.uikit/react";
const SelectStyled = styled.div`
  width: 100%;

  .component {
    box-shadow: none;

    &:focus-within {
      box-shadow: none;
    }
  }
  .message {
    display: none;
  }
`;

export const AlterarFabricaSelect = props => {
  return (
    <SelectStyled>
      <SelectBox {...props} />
    </SelectStyled>
  );
};
