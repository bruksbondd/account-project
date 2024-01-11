import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesReducer } from '../../model/slice/articlesSlice';
import cls from './Articles.module.scss';
import {
    getArticlesData,
    getArticlesError,
    getArticlesIsLoading,
} from '../../model/selectors/articles';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign } from 'shared/ui/Text/Text';


interface ArticleProps {
    className?: string;
    
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

export const Articles = memo((props: ArticleProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesIsLoading);
    const articles = useSelector(getArticlesData);
    const error = useSelector(getArticlesError);

   

    console.log('isLoading', isLoading)
    console.log('articles', articles)
    console.log('error', error)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticles());
        }
    }, [dispatch]);

    if (isLoading) {
        return  <>
                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.skeleton} width={600} height={24} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                </>
        } else if (error) { 
             return  <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи.')}
                />
        }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.Articles, {}, [className])}>
                {articles?.map(article => {
                    return (
                        <div key={article.id}>
                            <div>{article.createdAt}</div>
                            <h1>{article.title}</h1>
                            <div>{article.subtitle}</div>
                        </div>
                    )
                })} 
            </div>
        </DynamicModuleLoader>
    );
});
