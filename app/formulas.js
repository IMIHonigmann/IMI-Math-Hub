const colors = {
  color1: "\\definecolor{color1}{RGB}{255, 204, 0} % Tertiary color for row 1",
  color2: "\\definecolor{color2}{RGB}{255, 153, 102}",
  color3: "\\definecolor{color3}{RGB}{102, 204, 0}"
}

const formulas = {
    matrix: "\\begin{pmatrix} a & b & c \\\\ c & d & c \\end{pmatrix}",
    vecProj: "\\text{proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}",
    crossP: "\\vec{a} \\times \\vec{b}",
    scalarTripleProduct: "(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}",
    volume: "|(\\vec{a} \\times \\vec{b}) \\cdot \\vec{d}|",
    gauss: `
    \\begin{bmatrix}
    \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
    \\textcolor{#FF7F50}{a_{21}} & \\textcolor{#FF7F50}{a_{22}} & \\textcolor{#FF7F50}{a_{23}} \\\\
    \\textcolor{#9ACD32}{a_{31}} & \\textcolor{#9ACD32}{a_{32}} & \\textcolor{#9ACD32}{a_{33}}
    \\end{bmatrix}
    `
    ,
    gaussS1: `
    \\begin{bmatrix}
    \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
    \\textcolor{#FF7F50}{a_{21}} & \\textcolor{#FF7F50}{a_{22}} & \\textcolor{#FF7F50}{a_{23}} \\\\
    \\textcolor{#9ACD32}{a_{31}}-\\textcolor{#FF7F50}{a_{11}} & \\textcolor{#9ACD32}{a_{32}}-\\textcolor{#FF7F50}{a_{12}} & \\textcolor{#9ACD32}{a_{33}}-\\textcolor{#FF7F50}{a_{13}}
    \\end{bmatrix}
    `,
    gaussS2: `
    \\begin{bmatrix}
    \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
    \\textcolor{#FF7F50}{a_{21}}-\\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#FF7F50}{a_{22}}-\\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#FF7F50}{a_{23}}-\\textcolor{#9b8cfa}{a_{13}} \\\\
    \\colorbox{blue}{0} & \\textcolor{#9ACD32}{a_{32}} & \\textcolor{#9ACD32}{a_{33}}
    \\end{bmatrix}
    `,
    gaussS3: `
    \\begin{bmatrix}
    \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
    \\colorbox{blue}{0} & \\textcolor{#FF7F50}{a_{22}} & \\textcolor{#FF7F50}{a_{23}} \\\\
    \\colorbox{blue}{\\textcolor{#9ACD32}{0}-\\textcolor{#FF7F50}{0}} & \\textcolor{#9ACD32}{a_{32}}-\\textcolor{#FF7F50}{a_{22}} & \\textcolor{#9ACD32}{a_{33}}-\\textcolor{#FF7F50}{a_{23}}
    \\end{bmatrix}
    `,
    gaussFinal: `
    \\begin{bmatrix}
    \\textcolor{#9b8cfa}{a_{11}} & \\textcolor{#9b8cfa}{a_{12}} & \\textcolor{#9b8cfa}{a_{13}} \\\\
    \\colorbox{blue}{0} & \\textcolor{#FF7F50}{a_{22}} & \\textcolor{#FF7F50}{a_{23}} \\\\
    \\colorbox{blue}{0} & \\colorbox{blue}{0} & \\textcolor{#9ACD32}{a_{33}}
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
  }

export default formulas;