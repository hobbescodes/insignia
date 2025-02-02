import { Avatar as AvatarPrimitive } from "@ark-ui/react";

import { cx } from "../../cx";

import type {
  AvatarFallbackProps as AvatarPrimitiveFallbackProps,
  AvatarImageProps as AvatarPrimitiveImageProps,
  AvatarRootProps as AvatarPrimitiveRootProps,
} from "@ark-ui/react";

export interface AvatarRootProps extends AvatarPrimitiveRootProps {}

const AvatarRoot = ({ className, ...rest }: AvatarRootProps) => (
  <AvatarPrimitive.Root
    className={cx(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...rest}
  />
);

export interface AvatarFallbackProps extends AvatarPrimitiveFallbackProps {}

const AvatarFallback = ({ className, ...rest }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cx(
      "flex size-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...rest}
  />
);

export interface AvatarImageProps extends AvatarPrimitiveImageProps {}

const AvatarImage = ({ className, ...rest }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    className={cx("aspect-square size-full", className)}
    {...rest}
  />
);

export { AvatarRoot, AvatarFallback, AvatarImage };
