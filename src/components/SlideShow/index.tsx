import clsx from "clsx";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children?: ReactNode;
  autoPlay?: boolean;
  duration?: number;
};

const SlideShow = ({ children, autoPlay, duration = 3000 }: Props) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);

  const showSlide = (): NodeJS.Timeout | undefined => {
    let timer = undefined;
    setCurrentSlideIdx((prev) =>
      prev >= Children.count(children) - 1 ? 0 : ++prev
    );
    if (autoPlay) {
      timer = setTimeout(showSlide, duration);
    }
    return timer;
  };

  useEffect(() => {
    const timer = showSlide();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {Children.map(children, (child, idx) => (
        <div
          className={clsx(
            idx !== currentSlideIdx ? "hidden" : "block",
            "slide-fade"
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
