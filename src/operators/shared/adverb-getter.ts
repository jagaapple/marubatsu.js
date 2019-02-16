// =============================================================================================================================
// SRC - OPERATORS - SHARED - ADVERB GETTER
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";

export const getAdverb = (type?: ModifierType) => {
  if (type == undefined) return "";

  switch (type) {
    case "not":
      return "not ";
    default:
      return "";
  }
};
