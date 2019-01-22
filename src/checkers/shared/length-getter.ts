// =============================================================================================================================
// SRC - CHECKERS - SHARED - LENGTH GETTER
// =============================================================================================================================
export const getLength = (value: any) => {
  if (value == undefined) return;

  let lengthOfValue = 0;

  switch (typeof value) {
    case "number":
      lengthOfValue = value.toString().length;

      break;
    case "string":
      lengthOfValue = value.length;

      break;
    case "object":
      lengthOfValue = Object.keys(value).length;

      break;
    default:
      return;
  }

  return lengthOfValue;
};
