import {
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
} from "./checkbox";

import type { Meta, StoryObj } from "@storybook/react";
import type { CheckboxProps } from "./checkbox";

type Story = StoryObj<typeof meta>;

const Checkbox = ({ ...props }: CheckboxProps) => (
  <CheckboxRoot {...props}>
    <CheckboxLabel>Checkbox</CheckboxLabel>
    <CheckboxControl>
      <CheckboxIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <title>Checkbox</title>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </CheckboxIndicator>
    </CheckboxControl>
    <CheckboxHiddenInput />
  </CheckboxRoot>
);

const meta = {
  title: "Components/Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export const Default: Story = {};

export default meta;
