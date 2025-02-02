import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button {...Default.args} size="icon">
        👋
      </Button>
      <Button {...Default.args} size="sm" />
      <Button {...Default.args} />
      <Button {...Default.args} size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button {...Default.args} variant="secondary">
        Secondary
      </Button>
      <Button {...Default.args} variant="outline">
        Outline
      </Button>
      <Button {...Default.args} variant="destructive">
        Destructive
      </Button>
      <Button {...Default.args} variant="ghost">
        Ghost
      </Button>
      <Button {...Default.args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export default meta;
