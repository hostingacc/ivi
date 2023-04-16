// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import  Button  from '../components/buttons/button';
import React from 'react';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button text='Нажать'/>,
};

export const Secondary: Story = {
  render: () => <Button text='Нажать' />,
};

export const Tertiary: Story = {
  render: () => <Button text='Нажать' />,
};