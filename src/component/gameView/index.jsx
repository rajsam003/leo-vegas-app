import React from "react";
import MainWrapper from "../styledComponents/mainWrapper";
import { styled } from "../../theme";

const GameView = ({games, match}) => {
  const {params = {}} = match
  const {gameName=''} = params

  console.log("params:: ", JSON.stringify(params))
  
  const game = games.find(g => {
    return g.get('slug') === gameName}
    )

  let url =''
    
  if(game){
    url = game.gamePreviewUrlMobile ? game.get('gamePreviewUrlMobile') : game.get('gamePreviewUrl');
  }

  return (
    <MainWrapper>
       <IframeWrapper src={url} />
    </MainWrapper>
  );
};


export default GameView;

export const IframeWrapper = styled.iframe`
position: absolute;
top: 0;
left: 0;
border: 0;
width: 100%;
height: 100%;
`;