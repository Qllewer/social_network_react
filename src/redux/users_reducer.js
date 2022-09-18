const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  posts: [
    { id: 1, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg', followed:false, fullName: "Dmitry", status: 'Crazy', location: {city: 'Minsk', country: 'Belarus'} },
    { id: 2, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:true, fullName: "Sasha", status: 'Im hungry', location: {city: 'Moskva', country: 'Russia'} },
    { id: 3, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:false, fullName: "Nikita", status: 'Evil', location: {city: 'Alma-Ata', country: 'Kazakhstan'} },
    { id: 4, photoUrl:'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',  followed:true, fullName: "Pavel", status: 'Sad', location: {city: 'Kiev', country: 'Ukraine'} },
  ],
  newPostText: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return { ...state, followed:!state.followed };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default: return state;
  }
};

export const followAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
