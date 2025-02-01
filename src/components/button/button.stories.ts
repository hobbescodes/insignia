import { fn } from "@storybook/test";

import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export default meta;
