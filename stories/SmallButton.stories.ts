import type { Meta, StoryObj } from "@storybook/react";
import SmallButton from "../components/controls/buttons/smallButton";
import vkIcon from "./assets/vk.svg";

const meta: Meta<typeof SmallButton> = {
  title: "SmallButton",
  component: SmallButton,
  tags: ["autodocs"],
  /*   argTypes: {
        isCircle:boolean,
    }, */
};
export default meta;

type Story = StoryObj<typeof SmallButton>;

export const Primary: Story = {
  args: {
    icon: vkIcon,
  },
};

export const Circled: Story = {
  args: {
    icon: vkIcon,
    isCircle: true,
  },
};
