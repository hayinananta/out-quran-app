import { combineReducers } from "redux";

import surah from "./surah";
import searchSurah from "./searchSurah";
export default combineReducers({
  surah,
  searchSurah,
});
