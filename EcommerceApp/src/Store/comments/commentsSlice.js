import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  //Le ponemos nombre y su estado inicial
  name: "comments",
  initialState: {
    error:{},
    isLoadingComments: false,
    comments: [],
  },
  reducers: {
    //Funcion para agregar nuevos Commentos al comments
    onAddNewComment: (state, action) => {
        state.comments.push(action.payload);
      },
      onDeleteComment: (state, action) => {
        state.comments.filter((comment) => comment.id != action.payload);
      },
    onStartLoading:(state)=>{
        state.isLoadingComments = true;
    },
    onloadComments: (state, action) => {
        state.isLoadingComments = false;
        state.comments = action.payload;
      },
  },
});

export const { onAddNewComment, onDeleteComment,onloadComments,onStartLoading} = commentsSlice.actions;
export default commentsSlice.reducer;
