import React, {
  ComponentPropsWithRef,
  ReactNode,
  RefObject,
  useRef,
} from "react";

type Props = ComponentPropsWithRef<"input"> & {
  label?: string;
  clsName?: string;
};

const TextFiled = ({ label, clsName, ...restProps }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={clsName}>
      <label htmlFor={restProps.id} className="block mb-1">
        {label}
      </label>
      <div>
        <input
          ref={ref}
          className="px-2 py-3 block w-full border border-solid border-black"
          type="text"
          {...restProps}
        />
      </div>
    </div>
  );
};

export default TextFiled;
