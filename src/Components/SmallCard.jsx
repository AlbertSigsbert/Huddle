import React from "react";
import { Button } from "./Styled/Button.styled";
import { StyledSmallCard } from "./Styled/SmallCard.styled";

function SmallCard() {
  return (
    <StyledSmallCard>
      <div>
        <h2>Ready To Build Your Community?</h2>
        <Button bg="hsl(322, 100%, 66%)" color="#fff">Get Started For Free</Button>
      </div>
    </StyledSmallCard>
  );
}

export default SmallCard;