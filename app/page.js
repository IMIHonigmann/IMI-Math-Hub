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
      <title> IMI-MathHub</title>
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

      <div class='mx-5'>
        <h1 class="text-5xl my-5"> Gaussian Elimination </h1>
        <p> Our Goal: Subtract the Rows with eachother (allowed in algebra btw) until you get a form that resembles stairs ascending to the left</p>
        <InlineMath math={`a_{21}, a_{31}, a_{32}`} /> <span> should all equal 0 in the end</span>
        <br/>
        <br/>
        <p>Note: This is not always possible but what we want to see is this:</p>
        <br/>
        <InlineMath math={formulas.gauss} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={formulas.gaussS1} />
        <InlineMath math={`III' = III - (I/a_{11} * a_{31})`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={formulas.gaussS2} />
        <InlineMath math={`II' = II - (I/a_{11} * a_{21})`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={formulas.gaussS3} />
        <InlineMath math={`III'' = III' - (II/a_{21} * a_{31})`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={formulas.gaussFinal} />
        <br/>
        <br/>
        <p>{`Don't panic! It's very computationally intensive but not that complicated when you break it down. Just do it a few times and you'll get the hang of it`}</p>
      </div>

      <h1 class="text-5xl my-5 mt-10"> Gauss-Jordan Elimination </h1>
      <BlockMath math={formulas.gaussJordan} />
    </div>
  );
}

function GeoGebraTest(applId) {

  return (
    <div>
      <Head>
        <title>GeoGebra 3D Applet Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.geogebra.org/apps/deployggb.js" async ></script>
      </Head>
      <h1></h1>
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
      <GeoGebra appletId='applet2' />
    </div>
  );
}

export default Home;
