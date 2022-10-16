import React from "react";
import {
  StyledContainer,
  StyledDiv,
  StyledIframe,
  Overlay,
} from "./Media.styled";
type Props = {};

const Media = (props: Props) => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledIframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/9JSYB59QmZw"
          title="Introducing the Udemy app"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></StyledIframe>
        <Overlay />
      </StyledContainer>
    </StyledDiv>
  );
};
export default Media;
