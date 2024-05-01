import { ADD, DEL, CLR, TOOGLE } from "../action/todoAction";

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "work hard", completed: false },
  ],
}; // state in ilk durumu

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        // initial değeri alıyoruz önce obje yapısını bozmamak için
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ], // destruc ediyoruz ki olan yapılarıda gelsin ancak state içinde olduğundan state içindeki todolisti aç diyoruz.,// veri burada payload da tutulduğundan yazılacak olan yere dinamik olarak payloadı veriyoruz
      };
      case CLR:
      return initialState;
      case DEL:
      return {
        ...state,
        todoList:state.todoList.filter(item=>item.id !== payload)
      }
      case TOOGLE:
      return {
        ...state,
        todoList:state.todoList.map(item=>
          item.id == payload? {...item,completed:!item.completed} : item )
      }

    default:
      return state;
  }
};
