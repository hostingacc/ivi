import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DropDownButton from "../components/controls/buttons/dropDownButton";
import { cutText } from "@/functions/cutText";

const meta: Meta<typeof DropDownButton> = {
  title: "DropDownButton",
  component: DropDownButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDownButton>;

export const Default: Story = {
  args: {
    name: "Жанры",
    isOpen: false,
    onClick: () => {},
  },
};
export const Opened: Story = {
  args: {
    name: "Жанры",
    isOpen: true,
    onClick: () => {},
  },
};

export const WithFilters: Story = {
  args: {
    name: "Жанры",
    filters: [
      { nameRu: "filter 1", id: "1", name: "filter 1" },
      { nameRu: "filter 2", id: "2", name: "filter 2" },
    ],
    isOpen: false,
    onClick: () => {},
  },
};
export const WithCuttedFilters: Story = {
  args: {
    name: "Жанры",
    filters: [
      { nameRu: "filter 1", id: "1", name: "filter 1" },
      { nameRu: "filter 2", id: "2", name: "filter 2" },
      { nameRu: "filter 2", id: "2", name: "filter 2" },
      { nameRu: "filter 2", id: "2", name: "filter 2" },
    ],
    isOpen: false,
    onClick: () => {},
  },
};

export const Transparent: Story = {
  args: {
    name: "Жанры",
    isOpen: false,
    onClick: () => {},
    isTransparent: true,
  },
};
