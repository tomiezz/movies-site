import clsx from "clsx";
import React, { ComponentPropsWithRef, ReactNode } from "react";
import CSS from "./button.module.css";

type ButtonProps = {
  label?: string;
  children?: ReactNode;
  type: "button";
  props: ComponentPropsWithRef<"button">;
};

type LinkProps = {
  type: "link";
  label?: string;
  children?: ReactNode;
  props: ComponentPropsWithRef<"a">;
};

type Props = ButtonProps | LinkProps;

const Button = ({ type, label, children, props }: Props) => {
  switch (type) {
    case "button":
      return (
        <button
          {...props}
          className={clsx(
            CSS["common-button"],
            "py-2 px-4 uppercase font-medium",
            props.className
          )}
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
          className={clsx(
            CSS["common-button"],
            "py-1 px-4 block uppercase font-medium",
            props.className
          )}
        >
          {label || children}
        </a>
      );

    default:
      return null;
  }
};

export default Button;
