// components/GeoGebraApplet.js
import React, { useEffect, useRef, useState } from 'react';
import GeoGebraScript from './script';

const GeoGebraApplet = ({ options }) => {
  const ggbContainer = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded && window.GGBApplet) {
      const parameters = {
        ...options,
        appName: 'graphing',
        width: 800,
        height: 600,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
      };

      const ggbApp = new window.GGBApplet(parameters, true);
      ggbApp.inject(ggbContainer.current);

      return () => {
        if (ggbApp) {
          ggbApp.remove();
        }
      };
    }
  }, [isScriptLoaded, options]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.GGBApplet) {
      setIsScriptLoaded(true);
    }
  }, []);

  return (
    <>
      <GeoGebraScript />
      <div ref={ggbContainer} style={{ width: '800px', height: '600px' }}></div>
    </>
  );
};

export default GeoGebraApplet;
