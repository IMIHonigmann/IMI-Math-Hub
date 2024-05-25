// app/page.js
'use client';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import GeoGebraApplet from './components/GeoGebraApplet';
import { useState } from 'react';

const matrix = '\\begin{pmatrix} a & b & c \\\\ c & d & c \\end{pmatrix}';
const vecProj = '\\text{proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}';
const crossP = '\\vec{a} \\times \\vec{b}';
const scalarTripleProduct = '(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}';
const volume = `|${scalarTripleProduct}|`;

function Home() {
  const [language, setLanguage] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(prev => !prev);
  };

  return (
    <div>
      <span onClick={handleLanguageChange} className={'lang ' + (language ? 'off' : 'on')}>
      <span className={'changeLang ' + (language ? 'off' : 'on')}>||||</span></span>
      <p className="cursor-pointer" id="changeLang" onClick={handleLanguageChange}> {language ? 'English' : 'Deutsch'} </p>

      <h3> Vector Projection </h3>
      <BlockMath math={vecProj} />
      <h3> Cross Product </h3>
      <BlockMath math={crossP} />

      <h3> Scalar Triple Product </h3>
      <BlockMath math={scalarTripleProduct} />

      <h3> Volume </h3>
      <BlockMath math={volume} />

      <h1>GeoGebra in Next.js</h1>
      <GeoGebraApplet options={{}} />
    </div>
  );
}

export default Home;
