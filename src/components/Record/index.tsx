import clsx from "clsx";
import React, { ComponentPropsWithRef, ReactNode } from "react";

type Props = {
  label?: string;
  content?: string;
  children?: ReactNode;
} & ComponentPropsWithRef<"div">;

const Record = ({ label, content, children, ...divProps }: Props) => {
  return (
    <div {...divProps} className={clsx(divProps.className, "flex")}>
      <h3 className="mr-4 font-medium min-w-[100px]">{label}</h3>
      {children ? children : <p>{content}</p>}
    </div>
  );
};

export default Record;
