const colors = [
  '#9B8CFA',
  '#FF7F50',
  '#9ACD32'
];

const gEl = {
  a_11: `\\textcolor{${colors[0]}}{a_{11}}`, a_12: `\\textcolor{${colors[0]}}{a_{12}}`, a_13: `\\textcolor{${colors[0]}}{a_{13}}`,
  a_21: `\\textcolor{${colors[1]}}{a_{21}}`, a_22: `\\textcolor{${colors[1]}}{a_{22}}`, a_23: `\\textcolor{${colors[1]}}{a_{23}}`,
  a_31: `\\textcolor{${colors[2]}}{a_{31}}`, a_32: `\\textcolor{${colors[2]}}{a_{32}}`, a_33: `\\textcolor{${colors[2]}}{a_{33}}`,
};

const unchangedGaussRows = [
  `\\textcolor{${colors[0]}}{a_{11}} & \\textcolor{${colors[0]}}{a_{12}} & \\textcolor{${colors[0]}}{a_{13}} \\\\`,
  `${gEl.a_21} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\`,
  `\\textcolor{${colors[2]}}{a_{31}} & \\textcolor{${colors[2]}}{a_{32}} & \\textcolor{${colors[2]}}{a_{33}}`
];

const formulas = {
  matrix: "\\begin{pmatrix} a & b & c \\\\ c & d & c \\end{pmatrix}",
  vecProj: "\\text{proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}",
  crossP: "\\vec{a} \\times \\vec{b}",
  scalarTripleProduct: "(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}",
  volume: "|(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}|",
  gauss: `
    \\begin{bmatrix}
      ${unchangedGaussRows[0]}
      ${unchangedGaussRows[1]}
      ${unchangedGaussRows[2]}
    \\end{bmatrix}
  `,
  gaussS1: `
    \\begin{bmatrix}
      ${unchangedGaussRows[0]}
      ${gEl.a_21} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\textcolor{${colors[2]}}{a_{31}}-(${gEl.a_11}/${gEl.a_11}*${gEl.a_31}) & \\textcolor{${colors[2]}}{a_{32}}-(${gEl.a_12}/${gEl.a_11}*${gEl.a_31}) & \\textcolor{${colors[2]}}{a_{33}}-(${gEl.a_13}/${gEl.a_11}*${gEl.a_31})
    \\end{bmatrix}
  `,
  gaussS2: `
    \\begin{bmatrix}
      ${unchangedGaussRows[0]}
      ${gEl.a_21}-(${gEl.a_11}/${gEl.a_11}*${gEl.a_21}) & \\textcolor{${colors[1]}}{a_{22}}-(${gEl.a_12}/${gEl.a_11}*${gEl.a_21}) & \\textcolor{${colors[1]}}{a_{23}}-(${gEl.a_13}/${gEl.a_11}*${gEl.a_21}) \\\\
      \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{a_{32}} & \\textcolor{${colors[2]}}{a_{33}}
    \\end{bmatrix}
  `,
  gaussS3: `
    \\begin{bmatrix}
      ${unchangedGaussRows[0]}
      \\colorbox{blue}{\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\colorbox{blue}{\\textcolor{${colors[2]}}{0}-\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[2]}}{a_{32}}-(${gEl.a_22}/${gEl.a_21}*${gEl.a_31}) & \\textcolor{${colors[2]}}{a_{33}}-(${gEl.a_23}/${gEl.a_21}*${gEl.a_31})
    \\end{bmatrix}
  `,
  gaussFinal: `
    \\begin{bmatrix}
      ${unchangedGaussRows[0]}
      \\colorbox{blue}{0} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\colorbox{blue}{0} & \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{a_{33}}
    \\end{bmatrix}
  `,
  gaussEx: `
    \\begin{bmatrix}
      \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
      ${gEl.a_21} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\textcolor{${colors[2]}}{a_{31}} & \\textcolor{${colors[2]}}{a_{32}} & \\textcolor{${colors[2]}}{a_{33}}
    \\end{bmatrix}
  `,
  gaussS1Ex: `
    \\begin{bmatrix}
      \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
      ${gEl.a_21} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\textcolor{${colors[2]}}{a_{31}}-\\textcolor{#9b8cfa}{a_{11}} & \\textcolor{${colors[2]}}{a_{32}}-\\textcolor{#9b8cfa}{a_{12}} & \\textcolor{${colors[2]}}{a_{33}}-\\textcolor{#9b8cfa}{a_{13}}
    \\end{bmatrix}
  `,
  gaussS2Ex: `
    \\begin{bmatrix}
      \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
      ${gEl.a_21}-\\textcolor{#9b8cfa}{a_{11}} & \\textcolor{${colors[1]}}{a_{22}}-\\textcolor{#9b8cfa}{a_{12}} & \\textcolor{${colors[1]}}{a_{23}}-\\textcolor{#9b8cfa}{a_{13}} \\\\
      \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{a_{32}} & \\textcolor{${colors[2]}}{a_{33}}
    \\end{bmatrix}
  `,
  gaussS3Ex: `
    \\begin{bmatrix}
      \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
      \\colorbox{blue}{\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\colorbox{blue}{\\textcolor{${colors[2]}}{0}-\\textcolor{${colors[1]}}{0}} & \\textcolor{${colors[2]}}{a_{32}}-\\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[2]}}{a_{33}}-\\textcolor{${colors[1]}}{a_{23}}
    \\end{bmatrix}
  `,
  gaussFinalEx: `
    \\begin{bmatrix}
      \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
      \\colorbox{blue}{0} & \\textcolor{${colors[1]}}{a_{22}} & \\textcolor{${colors[1]}}{a_{23}} \\\\
      \\colorbox{blue}{0} & \\colorbox{blue}{0} & \\textcolor{${colors[2]}}{a_{33}}
    \\end{bmatrix}
  `,
  gaussJordan: `
    \\begin{bmatrix}
      b_{11} & b_{12} & b_{13} & b_{14} \\\\
      b_{21} & b_{22} & b_{23} & b_{24} \\\\
      b_{31} & b_{32} & b_{33} & b_{34} \\\\
      b_{41} & b_{42} & b_{43} & b_{44}
    \\end{bmatrix}
  `,
  gaussJordanS1: `
    \\begin{bmatrix}
      b_{11} & b_{12} & b_{13} & b_{14} \\\\
      b_{21} & b_{22} & b_{23} & b_{24} \\\\
      b_{31} & b_{32} & b_{33} & b_{34} \\\\
      b_{41}-b_{11} & b_{42}-b_{12} & b_{43}=b_{13} & b_{44}-b_{14}
    \\end{bmatrix}
  `
};

export default formulas;
