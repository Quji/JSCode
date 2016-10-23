import {
  ACTION_CHANGE_INPUT,
  ACTION_CHANGE_FROM,
  ACTION_CHANGE_TO,
  ALL_SYMBOLS,
  DEFAULT_FROM,
  DEFAULT_TO,
} from 'constants';

const initialState = {
  input: 0,
  from: DEFAULT_FROM,
  to: DEFAULT_TO
};

function getNewSymbol(currSymbol, changeI) {
  const currI = ALL_SYMBOLS.indexOf(currSymbol);
  const newI = currI + changeI;

  if(typeof ALL_SYMBOLS[newI] === 'undefined') {
    if(changeI === 1) {
      return ALL_SYMBOLS[0];
    }
    else {
      return ALL_SYMBOLS[ALL_SYMBOLS.length - 1];
    }
  }

  return ALL_SYMBOLS[newI];
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_CHANGE_INPUT:
      return {
        ...state,
        input: parseInt(action.payload, 10)
      };
    case ACTION_CHANGE_FROM:
      return {
        ...state,
        from: getNewSymbol(state.from, action.payload)
      };
    case ACTION_CHANGE_TO:
      return {
        ...state,
        to: getNewSymbol(state.to, action.payload)
      };
    default:
      return state;
  }
}
