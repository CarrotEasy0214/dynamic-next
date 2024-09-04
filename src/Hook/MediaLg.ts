import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsLg = () => {
  const [isLg, setIsLg] = useState(false);
  const lg = useMediaQuery({ query: "(max-width: 999px)" });
  useEffect(() => {
    setIsLg(lg);
  }, [lg]);

  return isLg;
};

export default useIsLg;
