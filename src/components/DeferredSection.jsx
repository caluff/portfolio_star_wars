import {useEffect, useRef, useState} from "react";

const DeferredSection = ({children, id, minHeight}) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(
    () =>
      !("IntersectionObserver" in window) ||
      Boolean(id && window.location.hash === `#${id}`),
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container || shouldRender) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {rootMargin: "800px 0px"},
    );

    const revealFromHash = () => {
      if (id && window.location.hash === `#${id}`) {
        setShouldRender(true);
      }
    };

    observer.observe(container);
    window.addEventListener("hashchange", revealFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", revealFromHash);
    };
  }, [id, shouldRender]);

  return (
    <div id={id} ref={containerRef} className="scroll-mt-24" style={{minHeight}}>
      {shouldRender ? children : null}
    </div>
  );
};

export default DeferredSection;
