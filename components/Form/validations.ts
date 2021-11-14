import { Validator } from "./types";

export const required: Validator = (fieldName, values): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? `${fieldName} must be populated`
    : "";

export const isEmail: Validator = (filedName, values) =>
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(
    values[filedName]
  )
    ? ""
    : `${filedName} most be a valid email !`;
