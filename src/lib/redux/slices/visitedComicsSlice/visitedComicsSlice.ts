/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: VisitedComicsState = {
  comics: [],
};

export const visitedComicsState = createSlice({
  name: "visitedComics",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    doAddAction: (state, action: PayloadAction<VisitedComicsPayload>) => {
      const item = action.payload;
      const index = state.comics.findIndex((i) => i.id === item.id);
      console.log("index", index);
      if (index === -1) {
        state.comics.unshift({
          id: item.id,
          chapterIds: [+item.chapterIds],
          chapterName: item.chapterName,
          image: item.image,
          name: item.name,
        });
      } else {
        if (state.comics[index].chapterIds.includes(+item.chapterIds)) {
          return;
        } else {
          state.comics[index] = {
            ...state.comics[index],
            chapterIds: [+item.chapterIds, ...state.comics[index].chapterIds],
            chapterName: item.chapterName,
            image: item.image,
            name: item.name,
          };
          const updatedItem = state.comics.splice(index, 1)[0];
          state.comics.unshift(updatedItem);
        }
      }
    },
    doDeleteAction: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const updateComics = state.comics.filter((i) => i.id !== id);
      state.comics = updateComics;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const { doAddAction, doDeleteAction } = visitedComicsState.actions;

/* Types */
export interface VisitedComicsState {
  comics: {
    id: string;
    chapterIds: number[];
    chapterName: string;
    image: string;
    name: string;
  }[];
}

export interface VisitedComicsPayload {
  id: string;
  chapterIds: number;
  chapterName: string;
  image: string;
  name: string;
}

export default visitedComicsState.reducer;