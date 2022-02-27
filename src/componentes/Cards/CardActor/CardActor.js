import React from "react";
import ActorImg from "../../../img/userActor.png";
import {
  CardActorStyled,
  ContainerImgStyled,
  InfoActorStyled,
} from "./CardActor.styled";
/**
 * 1.[ok] Exibir foto do ator
 * 2.[ok] Exibir nome do ator
 */
export default function CardActor({ actor, navigate }) {
  const actorImg = actor.profile_path
    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
    : `${ActorImg}`;

  return (
    <CardActorStyled>
      <ContainerImgStyled>
        <img src={actorImg} alt={""} />
      </ContainerImgStyled>

      <InfoActorStyled>
        <span>
          {actor.name}
          <br />
          Como: {actor.character}
        </span>
      </InfoActorStyled>
    </CardActorStyled>
  );
}
