import React from "react";
import { RightBarWrapper } from "./style";
import { PlainButton } from "@/components";
import { useAppSelector } from "@/documentation/actions/redux";

export const RightBar = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  switch (componentsGroupId) {
    case "buttons":
      return (
        <RightBarWrapper>
          <PlainButton
            label="buttons-1"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="buttons-2"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="buttons-3"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="buttons-4"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="buttons-5"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
        </RightBarWrapper>
      );
    case "inputs":
      return (
        <RightBarWrapper>
          <PlainButton
            label="inputs-1"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="inputs-2"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="inputs-3"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="inputs-4"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="inputs-5"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
        </RightBarWrapper>
      );
    default:
      return (
        <RightBarWrapper>
          <PlainButton
            label="cards-1"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="cards-2"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="cards-3"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="cards-4"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
          <PlainButton
            label="cards-5"
            look="textonly"
            size={"big"}
            kind={"default"}
            id={""}
          />
        </RightBarWrapper>
      );
  }
};
