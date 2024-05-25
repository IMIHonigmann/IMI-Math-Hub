// components/script.js
import Script from 'next/script';

const GeoGebraScript = () => (
  <Script
    src="https://cdn.geogebra.org/apps/deployggb.js"
    strategy="afterInteractive"
    onLoad={() => console.log('GeoGebra script loaded')}
  />
);

export default GeoGebraScript;
