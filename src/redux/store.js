import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { projectReducer } from "./reducer";
const middlewar = [];

if (process.env.NODE_ENV === "development") {
  middlewar.push(logger);
}

export const store = createStore(projectReducer, applyMiddleware(...middlewar));
