import React, {
  ComponentPropsWithRef,
  ReactNode,
  RefObject,
  forwardRef,
  memo,
  useRef,
} from "react";

type Props = ComponentPropsWithRef<"input"> & {
  label?: string;
  clsName?: string;
  errorMessage?: string;
};

const TextFiled = forwardRef<HTMLInputElement, Props>(
  ({ clsName, label, errorMessage, ...inputProps }, ref) => {
    return (
      <div className={clsName}>
        <label htmlFor={inputProps.id} className="block mb-1">
          {label}
        </label>
        <div>
          <input
            ref={ref}
            className="px-2 py-3 block w-full border border-solid border-black"
            type="text"
            {...inputProps}
          />
        </div>
        <div className="h-4">
          {errorMessage && (
            <span
              id={inputProps["aria-describedby"]}
              className="text-sm color-red text-red-500"
              role="alert"
            >
              {errorMessage}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextFiled.displayName = "TextField";

export default memo(TextFiled);
