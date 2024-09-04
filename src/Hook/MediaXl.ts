import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsXl = () => {
  const [isXl, setIsXl] = useState(false);
  const xl = useMediaQuery({ query: "(max-width: 1399px)" });
  useEffect(() => {
    setIsXl(xl);
  }, [xl]);

  return isXl;
};

export default useIsXl;
