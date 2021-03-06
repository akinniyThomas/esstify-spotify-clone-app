export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  itemCurrentlyPlaying: null,
  spotify: null,
  selectedPlaylistId: "",
  //   token:
  //     "BQAHuYKZCSe76Zkum1ej6URhC4iVtIKeFgx3tCKXjjAaQpO03z7U6F3XxOy1SytwambSrOjAmfwOJCaJtRwgYZsj9GUzBgjXFmxK7CGpobxX8sck1pll_4gXDTZ84zJjJh0mkXNcySIeS7qp6ZEXBCZj8T8ktVI",
};

export const reducer = (state, action) => {
  //   console.log(action);

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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_SELECTED_PLAYLIST":
      console.log("selection:", action.selectedPlaylistId);
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    default:
      return state;
  }
};
