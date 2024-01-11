import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

import { ArticlesSchema } from '../types/articlesSchema';
import { Article } from 'entities/Article/model/types/article';

const initialState: ArticlesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
};

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
