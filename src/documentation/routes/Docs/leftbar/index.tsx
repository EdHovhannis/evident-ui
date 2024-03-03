import { LeftBarWrapper } from "./style";
import { PlainButton } from "@/components/Buttons/PlainButton/index";
import { useActions } from "@/documentation/actions/actions";
import { TComponentsGroupId } from "@/documentation/types/type/componentsGroupId";

export const LeftBar = () => {
  const { setComponentsGroupId } = useActions();
  return (
    <LeftBarWrapper>
      <PlainButton
        label="Buttons"
        id="buttons"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        look="textonly"
        size={"big"}
        kind={"default"}
      />
      <PlainButton
        label="Inputs"
        id="inputs"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        look="textonly"
        size={"big"}
        kind={"default"}
      />
      <PlainButton
        label="Cards"
        id="cards"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        look="textonly"
        size={"big"}
        kind={"default"}
      />
    </LeftBarWrapper>
  );
};
