import { AvatarFallback, AvatarImage, AvatarRoot } from "./avatar";

import type { Meta, StoryObj } from "@storybook/react";
import type { AvatarRootProps } from "./avatar";

type Story = StoryObj<typeof meta>;

const Avatar = ({ ...props }: AvatarRootProps) => (
  <AvatarRoot {...props}>
    <AvatarFallback>UI</AvatarFallback>
    <AvatarImage src="https://i.pravatar.cc/300" />
  </AvatarRoot>
);

const meta: Meta<typeof Avatar> = {
  title: "Components/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
