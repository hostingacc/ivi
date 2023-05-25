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

export const Righted: Story = {
    args: {
        text:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        align:'right'
    },
};

export const Colored: Story = {
    args: {
        text:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        align:'left',
        color:'red'
    },
};
export const Bolded: Story = {
    args: {
      text: 'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
      align: 'left',
      weight: 700
    },
  };
  
  export const LargerText: Story = {
    args: {
      text: 'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
      align: 'left',
      size: '1.5rem'
    },
  };
  
  export const HoverColorChange: Story = {
    args: {
      text: 'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
      align: 'left',
      hover: '#fff'
    },
  };
  export const Highlighted: Story = {
    args: {
      text: 'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
      align: 'left',
      inputText: 'операторы'
    },
  };