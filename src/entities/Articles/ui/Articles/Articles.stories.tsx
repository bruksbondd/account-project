import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import {  ArticleType } from 'entities/Article/model/types/article';
import { Articles } from './Articles';

export default {
    title: 'entities/ArticleDetails',
    component: Articles,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

const articles: Article[] = [{
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        
    ],
}, {
    id: '2',
    title: 'Javascript news 2',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        
    ],
}];

 

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articles: {
        data: articles,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articles: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articles: {
        error: 'error',
    },
})];
