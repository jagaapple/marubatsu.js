// =============================================================================================================================
// SRC - OPERATORS - SHARED - ADVERB GETTER
// =============================================================================================================================
import { ModifierType } from "@modifiers/index";

export const getAdverb = (type?: ModifierType) => {
  switch (type) {
    case "not":
      return "not ";
    default:
      return "";
  }
};
