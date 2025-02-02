import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
} from "./accordion";

import type { Meta, StoryObj } from "@storybook/react";
import type { AccordionRootProps } from "./accordion";

type Story = StoryObj<typeof meta>;

const Accordion = ({ ...props }: AccordionRootProps) => (
  <AccordionRoot
    className="max-w-2xl"
    defaultValue={["React"]}
    collapsible
    {...props}
  >
    {["React", "Solid", "Vue"].map((item) => (
      <AccordionItem key={item} value={item}>
        <AccordionItemTrigger>
          {item}
          <AccordionItemIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <title>Expand</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </AccordionItemIndicator>
        </AccordionItemTrigger>
        <AccordionItemContent>
          {item} is a JavaScript library for building user interfaces.
        </AccordionItemContent>
      </AccordionItem>
    ))}
  </AccordionRoot>
);

const meta = {
  title: "Components/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export const Basic: Story = {};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

export default meta;
