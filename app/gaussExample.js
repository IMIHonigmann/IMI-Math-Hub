const colors = [
    '#9B8CFA',
    '#FF7F50',
    '#9ACD32'
  ];

const gEl1 = {
    a_11: `\\textcolor{${colors[0]}}{1}`, a_12: `\\textcolor{${colors[0]}}{2}`, a_13: `\\textcolor{${colors[0]}}{3}`,
    a_21: `\\textcolor{${colors[1]}}{4}`, a_22: `\\textcolor{${colors[1]}}{5}`, a_23: `\\textcolor{${colors[1]}}{6}`,
    a_31: `\\textcolor{${colors[2]}}{7}`, a_32: `\\textcolor{${colors[2]}}{8}`, a_33: `\\textcolor{${colors[2]}}{9}`
  };
  
  const gEl2 = {
    a_21: `${gEl1.a_21}`, a_22: `\\textcolor{${colors[1]}}{5}`, a_23: `\\textcolor{${colors[1]}}{6}`,
    a_31: `\\textcolor{${colors[2]}}{0}`, a_32: `\\textcolor{${colors[2]}}{8}-(2/1*7)`, a_33: `\\textcolor{${colors[2]}}{9}-(3/1*7)`
  };
  
  const gEl3 = {
    a_21: `\\textcolor{${colors[1]}}{0}`, a_22: `\\textcolor{${colors[1]}}{5}`, a_23: `\\textcolor{${colors[1]}}{6}`,
    a_31: `\\colorbox{blue}{\\textcolor{${colors[2]}}{0}-\\textcolor{${colors[1]}}{0}}`, a_32: `\\textcolor{${colors[2]}}{8}-(5/4*7)`, a_33: `\\textcolor{${colors[2]}}{9}-(6/4*7)`
  };
  
  const gEl4 = {
    a_21: `\\colorbox{blue}{0}`, a_22: `\\textcolor{${colors[1]}}{5}`, a_23: `\\textcolor{${colors[1]}}{6}`,
    a_31: `\\colorbox{blue}{0}`, a_32: `\\colorbox{blue}{0}`, a_33: `\\textcolor{${colors[2]}}{9}`
  };
  
  const unchangedGaussRows = [
    `\\textcolor{${colors[0]}}{1} & \\textcolor{${colors[0]}}{2} & \\textcolor{${colors[0]}}{3} \\\\`,
    `${gEl1.a_21} & \\textcolor{${colors[1]}}{5} & \\textcolor{${colors[1]}}{6} \\\\`,
    `\\textcolor{${colors[2]}}{7} & \\textcolor{${colors[2]}}{8} & \\textcolor{${colors[2]}}{9}`
  ];
  
  const formulas = {
    matrix: "\\begin{pmatrix} a & b & c \\\\ c & d & c \\end{pmatrix}",
    vecProj: "\\text{proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}",
    crossP: "\\vec{a} \\times \\vec{b}",
    scalarTripleProduct: "(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}",
    volume: "|(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}|",
    gaussInitial: `
      \\begin{bmatrix}
        ${unchangedGaussRows[0]}
        ${unchangedGaussRows[1]}
        ${unchangedGaussRows[2]}
      \\end{bmatrix}
    `,
    gaussS1: `
      \\begin{bmatrix}
        ${unchangedGaussRows[0]}
        ${gEl1.a_21} & \\textcolor{${colors[1]}}{5} & \\textcolor{${colors[1]}}{6} \\\\
        \\textcolor{${colors[2]}}{7}-(1/1*7) & \\textcolor{${colors[2]}}{8}-(2/1*7) & \\textcolor{${colors[2]}}{9}-(3/1*7)
      \\end{bmatrix}
    `,
    gaussS2: `
      \\begin{bmatrix}
        ${unchangedGaussRows[0]}
        ${gEl1.a_21}-(1/1*4) & \\textcolor{${colors[1]}}{5}-(2/1*4) & \\textcolor{${colors[1]}}{6}-(3/1*4) \\\\
        \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{-6} & \\textcolor{${colors[2]}}{12}
      \\end{bmatrix}
    `,
    gaussS3: `
      \\begin{bmatrix}
        ${unchangedGaussRows[0]}
        \\colorbox{blue}{\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[1]}}{5} & \\textcolor{${colors[1]}}{6} \\\\
        \\colorbox{blue}{\\textcolor{${colors[2]}}{0}-\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[2]}}{-6}-(5/5*(-6)) & \\textcolor{${colors[2]}}{12}-(6/5*(-6))
      \\end{bmatrix}
    `,
    gaussFinal: `
      \\begin{bmatrix}
        ${unchangedGaussRows[0]}
        \\colorbox{blue}{0} & \\textcolor{${colors[1]}}{5} & \\textcolor{${colors[1]}}{6} \\\\
        \\colorbox{blue}{0} & \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{19.2}
      \\end{bmatrix}
    `
  };

export default formulas;