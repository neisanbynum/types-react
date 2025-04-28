export type Thunk<Args extends unknown[] = [], Return = void> = (...args: Args) => Return;
export type AThunk<Args extends unknown[] = [], Return = void> = (...args: Args) => Promise<Return>;
