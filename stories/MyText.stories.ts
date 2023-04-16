import type { Meta, StoryObj } from '@storybook/react';

import MyText from '../components/content/myText';

const meta: Meta<typeof MyText> = {
    title: 'MyText',
    component: MyText,
    tags: ['autodocs'],

};
export default meta;


type Story = StoryObj<typeof MyText>;

export const Lefted: Story = {
    args: {
        text:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        align:'left'
    },
};

export const Centered: Story = {
    args: {
        text:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        align:'center'
    },
};

export const Rightted: Story = {
    args: {
        text:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        align:'right'
    },
};