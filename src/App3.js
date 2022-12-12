
import { useState } from 'react';
export default function App() {

const arrayDatas = 
[
  {a: 111, b: 666},
  {a: 222, b: 777},
  {a: 333, b: 888},
  // {a: 444, b: 999},
];

const showDatasPerPage = 2;
const pageMax = Math.ceil(((arrayDatas.length)/showDatasPerPage))

console.log('--- NEW LINE ---');
console.log('Total data:', arrayDatas.length);
console.log('Showing datas per page', showDatasPerPage);

let arrayPages = [];
for(let i=0; i<pageMax; i++){
  arrayPages.push(arrayDatas.slice(i*showDatasPerPage, (i*showDatasPerPage)+2));
}
console.log('Total Pages:', arrayPages.length);
console.log(arrayPages);

const [pages, setPages] = useState(1);
let theArrayPages  = [];
for(var ind in arrayPages){
  // console.log('array page:' + ind, arrayPages[ind]);
  theArrayPages.push(arrayPages[ind]);
}
  return(
  <> 
  {theArrayPages[(pages-1)].map((arr, ind) => 
    <div key={ind}>{arr.a} & {arr.b}</div>
  )}

  <div>
    Pages: 
    <input
      type='number'
      defaultValue={1}
      min={1}
      max={pageMax}
      onChange={(e) => setPages(e.target.value)}
    />
    from {arrayPages.length} pages
  </div>
  </> 
  )
}
