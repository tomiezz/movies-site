import clsx from "clsx";
import React, { ComponentPropsWithRef, ReactNode } from "react";

type ButtonProps = {
  label?: string;
  type: "button";
  children?: ReactNode;

  props: ComponentPropsWithRef<"button">;
};

type LinkProps = {
  type: "link";
  label?: string;
  children?: ReactNode;

  props: ComponentPropsWithRef<"a">;
};

type Props = ButtonProps | LinkProps;

const IconButton = ({ type, label, children, props }: Props) => {
  switch (type) {
    case "button":
      return (
        <button
          {...props}
          className={clsx("py-2 px-4 hover:scale-110	", props.className)}
        >
          {label || children}
        </button>
      );
    case "link":
      return (
        <a
          tabIndex={0}
          role="button"
          aria-pressed="true"
          {...props}
          className={clsx("py-1  hover:scale-110 px-4 block", props.className)}
        >
          {label || children}
        </a>
      );

    default:
      return null;
  }
};

export default IconButton;
