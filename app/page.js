// app/page.js
'use client';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Head from 'next/head';
import GeoGebra from './components/GeoGebra';
import formulas from './formulas';
import { useState } from 'react';


function Home() {
  const [language, setLanguage] = useState(false);

  
  const handleLanguageChange = () => {
    setLanguage(prev => !prev);
  };

  return (
    <div>
      <span onClick={handleLanguageChange} className={'lang ' + (language ? 'off' : 'on')}>
        <span className={'changeLang ' + (language ? 'off' : 'on')}>||||</span>
      </span>
      <p className="cursor-pointer" id="changeLang" onClick={handleLanguageChange}> 
        {language ? 'English' : 'Deutsch'} 
      </p>

      <h3>Vector Projection</h3>
      <BlockMath math={formulas.vecProj} />
      <GeoGebraTest />
      
      <h3>Cross Product</h3>
      <BlockMath math={formulas.crossP} />
      <GeoFicker />
      <h3>Scalar Triple Product</h3>
      <BlockMath math={formulas.scalarTripleProduct} />
      <h3>Volume</h3>
      <BlockMath math={formulas.volume} />

      <h1 class="text-5xl my-5"> Gaussian Elimination </h1>
      <p>Not always possible but what we want to see is this:</p>
      <InlineMath math={formulas.gauss} />
      {'=>'}
      <InlineMath math={formulas.gaussS1} />
      {'=>'}
      <InlineMath math={formulas.gaussS2} />
      {'=>'}
      <InlineMath math={formulas.gaussS3} />
      {'=>'}
      <InlineMath math={formulas.gaussFinal} />

      <h1 class="text-5xl my-5 mt-10"> Gaussian Jordan Elimination </h1>
      <BlockMath math={formulas.gaussJordan} />

      <h1>Triangle Test</h1>
    </div>
  );
}

function GeoGebraTest() {

  return (
    <div>
      <Head>
        <title>GeoGebra 3D Applet Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.geogebra.org/apps/deployggb.js" async ></script>
      </Head>
      <h1>GeoGebra 3D Applet Example</h1>
      <GeoGebra />
    </div>
  );
}

function GeoFicker() {

  return (
    <div>
      <Head>
        <title>GeoGebra 3D Applet Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.geogebra.org/apps/deployggb.js" async ></script>
      </Head>
      <h1>Watch dat souija boy</h1>
      <GeoGebra class="cursor-pointer" />
    </div>
  );
}

export default Home;
