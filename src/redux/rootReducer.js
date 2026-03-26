import { combineReducers } from "@reduxjs/toolkit";

import langReducer from "./features/lang";
import catalogReducer from "./features/catalog";

export const rootReducer = combineReducers({
    lang: langReducer,
    catalog: catalogReducer,
});
