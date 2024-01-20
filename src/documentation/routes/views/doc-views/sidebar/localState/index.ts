import { ISideBarItems } from "../types";

export const SideBars: ISideBarItems[] = [
  {
    location: "left",
    buttons: [
      { label: "Buttons", templateKey: "buttons-t" },
      { label: "Inputs", templateKey: "inputs-t" },
    ],
  },
  {
    template: "buttons-t",
    location: "right",
    buttons: [{ label: "button-1" }, { label: "button-2" }],
  },
  {
    template: "inputs-t",
    location: "right",
    buttons: [{ label: "input-1" }, { label: "input-2" }],
  },
];
