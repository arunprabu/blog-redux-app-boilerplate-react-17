// Setting up store
import { createStore } from "redux";
import { createRootReducer } from "./store";

export default function configureStore(){
  const store = createStore(
    createRootReducer()
  ); // special param reducer is needed
  console.log(store);
  return store;
}
