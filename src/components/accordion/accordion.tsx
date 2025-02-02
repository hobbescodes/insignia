import { Accordion as AccordionPrimitive } from "@ark-ui/react";

import { cx } from "../../cx";

import type {
  AccordionItemContentProps as AccordionPrimitiveItemContentProps,
  AccordionItemIndicatorProps as AccordionPrimitiveItemIndicatorProps,
  AccordionItemProps as AccordionPrimitiveItemProps,
  AccordionItemTriggerProps as AccordionPrimitiveItemTriggerProps,
  AccordionRootProps as AccordionPrimitiveRootProps,
} from "@ark-ui/react";

export interface AccordionRootProps extends AccordionPrimitiveRootProps {}

const AccordionRoot = AccordionPrimitive.Root;

export interface AccordionItemProps extends AccordionPrimitiveItemProps {}

const AccordionItem = ({ className, ...rest }: AccordionItemProps) => (
  <AccordionPrimitive.Item
    className={cx("border-b border-muted", className)}
    {...rest}
  />
);

export interface AccordionItemTriggerProps
  extends AccordionPrimitiveItemTriggerProps {}

const AccordionItemTrigger = ({
  className,
  ...rest
}: AccordionItemTriggerProps) => (
  <AccordionPrimitive.ItemTrigger
    className={cx(
      "cursor-pointer flex w-full items-center justify-between px-2 py-4 font-medium",
      className
    )}
    {...rest}
  />
);

export interface AccordionItemContentProps
  extends AccordionPrimitiveItemContentProps {}

const AccordionItemContent = ({
  className,
  ...rest
}: AccordionItemContentProps) => (
  <AccordionPrimitive.ItemContent
    className={cx(
      "overflow-hidden text-sm px-2 pb-4 transition-all data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:animate-accordion-down",
      className
    )}
    {...rest}
  />
);

export interface AccordionItemIndicatorProps
  extends AccordionPrimitiveItemIndicatorProps {}

const AccordionItemIndicator = ({
  className,
  ...rest
}: AccordionItemIndicatorProps) => (
  <AccordionPrimitive.ItemIndicator
    className={cx("transition-all data-[state=open]:rotate-180", className)}
    {...rest}
  />
);

export {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionItemIndicator,
};
