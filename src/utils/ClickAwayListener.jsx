import { useEffect, useRef } from "react";

const ClickAwayListener = ({ onClickAway, children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway && onClickAway();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickAway]);
  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
