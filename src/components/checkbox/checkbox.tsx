import { Checkbox as CheckboxPrimitive } from "@ark-ui/react";

import { cx } from "../../cx";

import type {
  CheckboxControlProps as CheckboxPrimitiveControlProps,
  CheckboxHiddenInputProps as CheckboxPrimitiveHiddenInputProps,
  CheckboxIndicatorProps as CheckboxPrimitiveIndicatorProps,
  CheckboxLabelProps as CheckboxPrimitiveLabelProps,
  CheckboxRootProps as CheckboxPrimitiveRootProps,
} from "@ark-ui/react";

export interface CheckboxProps extends CheckboxPrimitiveRootProps {}

const CheckboxRoot = ({ className, ...rest }: CheckboxProps) => (
  <CheckboxPrimitive.Root
    className={cx(
      "cursor-pointer peer flex flex-row-reverse items-center gap-3 w-fit",
      className
    )}
    {...rest}
  />
);

export interface CheckboxLabelProps extends CheckboxPrimitiveLabelProps {}

const CheckboxLabel = ({ className, ...rest }: CheckboxLabelProps) => (
  <CheckboxPrimitive.Label
    className={cx("text-sm font-medium", className)}
    {...rest}
  />
);

export interface CheckboxControlProps extends CheckboxPrimitiveControlProps {}

const CheckboxControl = ({ className, ...rest }: CheckboxControlProps) => (
  <CheckboxPrimitive.Control
    className={cx(
      "size-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...rest}
  />
);

export interface CheckboxIndicatorProps
  extends CheckboxPrimitiveIndicatorProps {}

const CheckboxIndicator = ({ className, ...rest }: CheckboxIndicatorProps) => (
  <CheckboxPrimitive.Indicator
    className={cx("flex items-center justify-center text-current", className)}
    {...rest}
  />
);

export interface CheckboxHiddenInputProps
  extends CheckboxPrimitiveHiddenInputProps {}

const CheckboxHiddenInput = ({ ...props }: CheckboxHiddenInputProps) => (
  <CheckboxPrimitive.HiddenInput {...props} />
);

export {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxHiddenInput,
};
