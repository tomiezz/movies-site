import clsx from "clsx";
import React, { ComponentPropsWithRef, ReactNode } from "react";
import CSS from "./icon-button.module.css";
import Link from "next/link";

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
          className={clsx(
            "py-2 px-4 hover:scale-110	",
            props.className,
            CSS["icon-button"]
          )}
        >
          {label || children}
        </button>
      );
    case "link":
      return (
        <Link
          href={props.href || "#"}
          tabIndex={0}
          role="button"
          aria-pressed="true"
          {...props}
          className={clsx(
            props.className,

            "py-1  hover:scale-110 px-4 block",
            CSS["icon-button"]
          )}
        >
          {label || children}
        </Link>
      );

    default:
      return null;
  }
};

export default IconButton;
