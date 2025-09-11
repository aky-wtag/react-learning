export const countReducer = (
  state: { count: number },
  action: { type: string }
) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "del":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
