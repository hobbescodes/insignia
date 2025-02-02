import { Dialog as DialogPrimitive, Portal } from "@ark-ui/react";

import { cx } from "../../cx";

import type {
  DialogBackdropProps as DialogPrimitiveBackdropProps,
  DialogCloseTriggerProps as DialogPrimitiveCloseTriggerProps,
  DialogContentProps as DialogPrimitiveContentProps,
  DialogDescriptionProps as DialogPrimitiveDescriptionProps,
  DialogPositionerProps as DialogPrimitivePositionerProps,
  DialogRootProps as DialogPrimitiveRootProps,
  DialogRootProviderProps as DialogPrimitiveRootProviderProps,
  DialogTitleProps as DialogPrimitiveTitleProps,
  DialogTriggerProps as DialogPrimitiveTriggerProps,
  PortalProps as PortalPrimitiveProps,
} from "@ark-ui/react";

export interface DialogRootProviderProps
  extends DialogPrimitiveRootProviderProps {}

const DialogRootProvider = DialogPrimitive.RootProvider;

export interface DialogPortalProps extends PortalPrimitiveProps {}

export const DialogPortal = Portal;

export interface DialogProps extends DialogPrimitiveRootProps {}

const DialogRoot = DialogPrimitive.Root;

export interface DialogTriggerProps extends DialogPrimitiveTriggerProps {}

const DialogTrigger = ({ ...props }: DialogTriggerProps) => (
  <DialogPrimitive.Trigger aria-label="Open Dialog" {...props} />
);

export interface DialogBackdropProps extends DialogPrimitiveBackdropProps {}

const DialogBackdrop = ({ className, ...rest }: DialogBackdropProps) => (
  <DialogPrimitive.Backdrop
    className={cx(
      "fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...rest}
  />
);

export interface DialogContentProps extends DialogPrimitiveContentProps {}

const DialogContent = ({ className, ...rest }: DialogContentProps) => (
  <DialogPrimitive.Content
    className={cx(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-zinc-50 dark:bg-zinc-950 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    )}
    {...rest}
  />
);

export interface DialogTitleProps extends DialogPrimitiveTitleProps {}

const DialogTitle = ({ className, ...rest }: DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cx(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...rest}
  />
);

export interface DialogDescriptionProps
  extends DialogPrimitiveDescriptionProps {}

const DialogDescription = ({ className, ...rest }: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    className={cx("text-sm text-muted-foreground", className)}
    {...rest}
  />
);

export interface DialogPositionerProps extends DialogPrimitivePositionerProps {}

const DialogPositioner = DialogPrimitive.Positioner;

export interface DialogCloseTriggerProps
  extends DialogPrimitiveCloseTriggerProps {}

const DialogCloseTrigger = ({ ...props }: DialogCloseTriggerProps) => (
  <DialogPrimitive.CloseTrigger aria-label="Close Dialog" {...props} />
);

export {
  DialogRoot,
  DialogRootProvider,
  DialogTrigger,
  DialogBackdrop,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPositioner,
  DialogCloseTrigger,
};
