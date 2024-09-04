import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMs = () => {
  const [isMs, setIsMs] = useState(false);
  const ms = useMediaQuery({ query: "(max-width: 699px)" });
  useEffect(() => {
    setIsMs(ms);
  }, [ms]);

  return isMs;
};

export default useIsMs;
