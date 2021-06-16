export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQAHuYKZCSe76Zkum1ej6URhC4iVtIKeFgx3tCKXjjAaQpO03z7U6F3XxOy1SytwambSrOjAmfwOJCaJtRwgYZsj9GUzBgjXFmxK7CGpobxX8sck1pll_4gXDTZ84zJjJh0mkXNcySIeS7qp6ZEXBCZj8T8ktVI",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
