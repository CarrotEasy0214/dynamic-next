import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMd = () => {
  const [isMd, setIsMd] = useState(false);
  const md = useMediaQuery({ query: "(max-width: 1219px)" });
  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return isMd;
};

export default useIsMd;
