import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={typedRef} />;
};

export default TypedText;