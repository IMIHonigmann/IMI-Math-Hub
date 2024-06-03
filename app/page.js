// app/page.js
'use client';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Head from 'next/head';
import GeoGebra from './components/GeoGebra';
import formulas from './formulas';
import gaussExample from './gaussExample';
import { useEffect, useState } from 'react';


function Home() {
  const [language, setLanguage] = useState(false);

  
  const handleLanguageChange = () => {
    setLanguage(prev => !prev);
  };

  // Ensures GH-Pages display works correctly
  useEffect(() => setLanguage(true), []);

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
      {/* <GeoGebraTest /> */}
      
      <h3>Cross Product</h3>
      <BlockMath math={formulas.crossP} />
      {/* <GeoFicker /> */}
      <h3>Scalar Triple Product</h3>
      <BlockMath math={formulas.scalarTripleProduct} />
      <h3>Volume</h3>
      <BlockMath math={formulas.volume} />

      <div class='mx-5'>
        <h1 class="text-5xl my-5" id="gaussianelimination"> Gaussian Elimination </h1>
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
        <InlineMath math={`III'' = III' - (II'/a_{22} * a_{32})`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={formulas.gaussFinal} />
        <br/>
        <br/>
        <p>{`Don't panic! It's very computationally intensive but not that complicated when you break it down. Just do it a few times and you'll get the hang of it`}</p>

        <br/>
        <br/>
        <p>Lets do an example:</p>
        <br/>
        <InlineMath math={gaussExample.gaussInitial} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={gaussExample.gaussS1} />
        <InlineMath math={`III' = III - (I/1 * 7)`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={gaussExample.gaussS2} />
        <InlineMath math={`II' = II - (I/1 * 4)`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={gaussExample.gaussS3} />
        <InlineMath math={`III'' = III' - (II'/5 * (-6))`} />
        <br/>
        <br/>
        {'=>'}
        <InlineMath math={gaussExample.gaussFinal} />
        <br/>
        <br/>
        <h3 class="text-3xl">{`Common use cases:`}</h3>
        <ul>
          <li>Solving a system of equations with
            <ul class="mx-5">
                <li>One Solution</li>
                <li>No Solution</li>
                <li>Set of Solutions</li>
            </ul>
          </li>
          <li>Finding 3 unknowns (usually x, y and z)</li>
          <li>Determining the rank/dimension of a matrix</li>
          <li>Checking if the matrix contains linearly dependent vectors</li>
        </ul>
      </div>

      <h1 class="text-5xl my-5 mt-10"> Gauss-Jordan Elimination </h1>
        <p> Similar to <a href="#gaussianelimination">Gaussian Elimination</a> with the difference that we do the same operation again on the symmetric part </p>
        <InlineMath math={formulas.gaussJordanFinal} />
        <p> {`You might realize that this looks a lot like the unit matrix form and you'd be correct!`} </p>
        <InlineMath math={formulas.gaussJordanFinal} />
          {`<=>`}
        <InlineMath math={formulas.unitMatrix} />
        <br/>
        <p> We can even augment it to the unit matrix by scaling every part if that is what we want </p>
        <br/>
        <InlineMath math={formulas.gaussJordanFinal} />
        <br/>
        <br/>
        <InlineMath math={`I' = I/b_{11}`} />
        <br/>
        <InlineMath math={`II' = II/b_{22}`} />
        <br/>
        <InlineMath math={`III' = III/b_{33}`} />
        <br/>
        <InlineMath math={`IV' = IV/b_{44}`} />
        <br/>
        <br/>
        <InlineMath math={formulas.unitMatrix} />
        <br/>
        <br/>
        <p> {`Let's do it in action`} </p>
        <div class='mx-5'>

          
          <InlineMath math={formulas.gaussJordanS1} />
          <p class="mx-5">
            <br/>
            <InlineMath math={`II' = II - (I/b_{11} * 4)`} />
            <br/>
            <InlineMath math={`III' = III - (I/b_{11} * 4)`} />
            <br/>
            <InlineMath math={`IV' = IV - (I/b_{11} * 4)`} />
          </p>
          <br/>
          <br/>
          {'=>'}
          <InlineMath math={formulas.gaussJordanS2} />
          <br/>
          <br/>
          {'=>'}
          <InlineMath math={formulas.gaussJordanS3} />
          <br/>
          <br/>
          <p> {`Now repeat this step symmetrically`} </p>
          {'=>'}
          <InlineMath math={formulas.gaussJordanS4} />
          <br/>
          <br/>
          {'=>'}
          <InlineMath math={formulas.gaussJordanS5} />
          <br/>
          <br/>
          {'=>'}
          <InlineMath math={formulas.gaussJordanS6} />
          <br/>
          <br/>
          {'=>'}
          <InlineMath math={formulas.gaussJordanFinal} />
          {`<=>`}
          <InlineMath math={formulas.unitMatrix} />
        <br/>
        <br/>

        <h1 class="text-5xl"> What is Linear Independence? </h1>
        <div> {`Suppose we have 3 Vectors. If all of these vectors are linearly dependent then we can use the span of these vectors to represent any Vector in `}<InlineMath math={`\\mathbb{R}^3`} />. </div>
        <div> {`Wanna see proof? Try it out. I guarantee you that you will be able to form any vector you want by just changing the coefficients of these 3 vectors`} </div>
        <a href='./files/LinearIndependence.gbb' download='./files/LinearIndependence.gbb'> {`Try it out`} </a>
        <br/>
        <h1 class="text-5xl"> Matrix Inversion </h1>
        <p> {`Before we start: I want you to remember the following`}</p>
        <InlineMath math={`\\mathbf{A} * \\mathbf{B} \\neq \\mathbf{B} * \\mathbf{A}`} />
        <br/>
        <InlineMath math={`\\mathbf{A} * \\mathbf{A}^{-1} = \\mathbf{E} `} /> <span> {`<=>`} </span> <InlineMath math={` \\mathbf{A}^{-1} * \\mathbf{A} = \\mathbf{E}`} />
      </div>
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

const HomeLoader = () => {
  useEffect(() => {
    window.onload = () => <Home/>
  }, []);

  return <>Loading...</>
}

export default Home;