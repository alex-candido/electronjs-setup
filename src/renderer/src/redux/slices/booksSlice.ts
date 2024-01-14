import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  volume: [] as Volume[],
  favorites: [] as string[]
}

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    ...initialState
  },
  reducers: {
    searchBookItems: (state, action: PayloadAction<Volume[]>) => {
      console.log(action.payload)
      state.volume = action.payload
    },
    addBookToFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync.pending')
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<Volume[]>) => {
        state.volume = action.payload
      })
  }
})

export const incrementAsync = createAsyncThunk('books/incrementAsync', async (amount: Volume[]) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return amount
})

export const { searchBookItems, addBookToFavorite } = booksSlice.actions

export default booksSlice.reducer
