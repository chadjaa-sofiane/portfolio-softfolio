import { useRef, useState, useMemo, useEffect } from "react";

interface optionalParamsI {
  options?: IntersectionObserverInit;
  isIntersecting?: boolean;
  disconnect?: boolean;
}

const useObserver = (
  optionalParams: optionalParamsI = {},
  callBack = (): any => {}
) => {
  const {
    options = {},
    isIntersecting = false,
    disconnect = false,
  } = optionalParams;
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const initialoptions = useMemo(() => options, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observe) => {
      const [entry] = entries;
      if (entry.isIntersecting === isIntersecting) {
        setActive(true);
        callBack();
        if (disconnect) observe.disconnect();
        return;
      }
      setActive(false);
    }, initialoptions);
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return [ref, active];
};

export default useObserver;
