import React, { useState, useEffect } from "react";
import TimeWatchLoader from "./loader";

const WithLoader = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds loading time

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <TimeWatchLoader />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithLoader;
