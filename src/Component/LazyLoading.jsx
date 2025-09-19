 import React, { useEffect, useState } from "react";
 const LazyLoading =()=> {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay
    return () => clearTimeout(timer); // cleanup
  }, []);
     
    if (isLoading) {
    return <h3>⏳ Loading content...</h3>;
  }

  return <h2>✅ Content Loaded after delay inside component!</h2>;
}

export default LazyLoading;