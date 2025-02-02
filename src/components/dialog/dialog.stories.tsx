import { Button } from "../button";
import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

import type { Meta, StoryObj } from "@storybook/react";
import type { DialogProps } from "./dialog";

type Story = StoryObj<typeof meta>;

const Dialog = ({ children, ...rest }: DialogProps) => (
  <DialogRoot {...rest}>
    <DialogTrigger asChild>
      <Button>Open dialog</Button>
    </DialogTrigger>
    <DialogPortal>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
          {children}
          <DialogCloseTrigger asChild className="absolute right-4 top-4">
            <Button variant="ghost" size="icon">
              X
            </Button>
          </DialogCloseTrigger>
        </DialogContent>
      </DialogPositioner>
    </DialogPortal>
  </DialogRoot>
);

const meta: Meta<typeof Dialog> = {
  title: "Components/Core/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export const Basic: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, purus in venenatis vehicula, arcu ligula tristique magna, sit amet lacinia ipsum ligula eu magna.",
  },
};

export default meta;
