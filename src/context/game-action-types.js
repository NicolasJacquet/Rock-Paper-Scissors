// @flow
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

type Action = {| type: typeof INCREMENT |} | {| type: typeof DECREMENT |};

export type { Action };
export { INCREMENT, DECREMENT };
