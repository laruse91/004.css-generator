// input-ranges
const rangeTl = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');
//  input-results
const resultTl = document.getElementById('result-tlr'),
      resultTr = document.getElementById('result-trr'),
      resultBl = document.getElementById('result-blr'),
      resultBr = document.getElementById('result-brr');

const input = document.querySelectorAll('.input');
const cube = document.getElementById('cube');

const total = document.getElementById('totalResult');
const btn = document.getElementById('btn');

const changeRadius = () => {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
}

function totalResult() {
    total.innerHTML = rangeTl.value + ' ' + rangeTr.value + ' ' + rangeBr.value + ' ' + rangeBl.value + ' ';
}

for(node of input) {
    node.addEventListener('input', changeRadius);
}

btn.addEventListener('click', totalResult);


// let ask = (question, yes, no) => {
// if (confirm(question)) yes()
//   else no();
// }

