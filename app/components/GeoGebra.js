// components/GeoGebra.js
import { useEffect } from 'react';

const GeoGebra = () => {
  useEffect(() => {
    // Function to load the GeoGebra script
    const loadGeoGebraScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.geogebra.org/apps/deployggb.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('GeoGebra script failed to load'));
        document.head.appendChild(script);
      });
    };

    // Function to initialize the GeoGebra applet and create geometric objects
    const initializeGeoGebra = () => {
      const parameters = {
        appName: '3d',
        width: 800,
        height: 600,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
      };

      const ggbApp = new window.GGBApplet(parameters, true);
      ggbApp.inject('ggb-element');
      
      setTimeout(() => {
        const api = ggbApp.getAppletObject();

        // api.evalCommand('A = (1, 1, 1)');
        // api.evalCommand('B = (4, 2, 3)');
        // api.evalCommand('C = (2, 4, 2)');

        // // Create the plane through these three points
        // api.evalCommand('plane = Plane(A, B, C)');

        // // Create a point not on the plane
        // api.evalCommand('D = (3, 3, 5)');

        api.evalCommand('a = (1, 2, 3)');
        api.evalCommand('b = (0, 3, 4)');
        api.evalCommand('λ = Dot(a,b) / |b|^2');
        api.evalCommand('v = λ*b');
        api.evalCommand('V = v');
        api.evalCommand('A = a');
        api.evalCommand('l = a-v');

        api.evalCommand('lot = Translate(l, V)');
        api.evalCommand("SetColor(lot, 1, 0, 0)");
        api.evalCommand("SetColor(v, 0, 1, 0)");
        api.setVisible('l', false);


      }, 1000); // Delay to ensure applet is fully loaded
    };

    

    // Load the GeoGebra script and initialize the applet
    loadGeoGebraScript().then(initializeGeoGebra).catch(console.error);
  }, []);

  return <div id="ggb-element" style={{ width: '800px', height: '600px' }}></div>;
};

export default GeoGebra;
