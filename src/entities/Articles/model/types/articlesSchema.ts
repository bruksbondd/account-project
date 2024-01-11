import { Article } from 'entities/Article';

export interface ArticlesSchema {
    isLoading: boolean;
    error?: string;
    data?: Article[];
    readonly: boolean;
}
