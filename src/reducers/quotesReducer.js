import { FETCH_QUOTES } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload || false;
    default:
      return state;
  }
};

/* export default () => {
  return [
    {"name":"Hard coded",
    "quote": "this is chardcoded comment out reducer shit"  
  }
  ]
} */
