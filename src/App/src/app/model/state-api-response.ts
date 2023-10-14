import { State } from "./state";

export class StateApiResponse {

  constructor(
    public _embedded: {
      states: State[]
    }
  ) {
  }
}
