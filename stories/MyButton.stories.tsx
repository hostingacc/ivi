import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppleIcon from '@mui/icons-material/Apple';
import MyButton  from '../components/buttons/myButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
/*     backgroundColor: {
      control: 'color',
    }, */
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Написать в чате',
    color: '#1f1b2e',
    hoverColor: '#3e3659',
  },
};

export const WithSmallTextSecondary: Story = {
  args: {
    text: 'App Store',
    smallText: 'Загрузите в',
   // icon: <AppleIcon /> as ReactElement, не работает, todo
    color: '#1f1b2e',
    hoverColor: '#3e3659'
  },
};

export const Colored: Story = {
  args: {
    text: 'Смотрите по подписке',
    color: '#ea003d',
  },
};

export const Transparent: Story = {
  args: {
    text: 'Написать в чате',
    color: 'transparent',
    hoverColor: '#3e3659',
    fontColor: '#fff'
  },
};

export const WithStartIcon: Story = {
  args: {
    text: 'App Store',
    smallText: 'Загрузите в',
    startIcon: <AppleIcon />,
    color: '#1f1b2e',
    hoverColor: '#3e3659'
  },
};

export const WithEndIcon: Story = {
  args: {
    text: 'текст',
    endIcon: <AppleIcon />,
    showEndIcon: true,
    color: '#ea003d',
  },
};
