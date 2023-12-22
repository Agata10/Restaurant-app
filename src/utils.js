import { fetchData } from './API';
export const initializeTimes = { avaiableTimes: fetchData(new Date()) };

export const updateTimes = (state, date) => {
  state = { avaiableTimes: fetchData(new Date(date)) };
  return state;
};
