import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import datasJson from './datas25.json';

export default function App() {
  const [search, setSearch] = useState('');
  const searchRef = useRef('');
  const handleClickSearch = () => { setSearch(searchRef.current.value) };
  const [gender, setGender] = useState('');
  const [selectGender] = useState([
    {label:'Select gender', value:''},
    {label:"male", value:"male"},
    {label:"female", value:"female"},
  ]);
  const handleReset = () => { setSearch(''); setGender(''); setPages(1) }
  
  const [pagesMax, setPagesMax] = useState(0);
  const [pages, setPages] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [showDatas, setShowDatas] = useState();
  
  useEffect(()=>{
    // from all json data api, create new variabel 'getDatas' with format custom object of array for mapping to table
    const choosenKey = datasJson.results;
    const getDatas = [];
    for (let key in choosenKey){
      getDatas.push({
        "namee" : choosenKey[key].name.first,
        "gender" : choosenKey[key].gender
      });
    }
    // create new variabel 'datasBySearch' with format custom object of array for show data by 'search'
    const datasBySearch = [];
    for (let key in getDatas){
      if (((
        ( getDatas[key].namee).toLowerCase()).includes(search)) || 
          ((getDatas[key].gender).toLowerCase()).includes(search)
        ){
        datasBySearch.push({
          "namee" : getDatas[key].namee,
          "gender" : getDatas[key].gender
        });
      }
    }
    
    // create new variabel 'arrayDatasNonPages' with format custom [{},{}] filtering by 'gender' (male/female/other)
    let arrayDatasNonPages;
    if(gender === 'male'){
      arrayDatasNonPages = datasBySearch.filter(e => e.gender === 'male');
    } else if (gender === 'female'){
      arrayDatasNonPages = datasBySearch.filter(e => e.gender === 'female');
    } else {
      arrayDatasNonPages = datasBySearch;
    }

    // Pagination code
    // set Data showing per Page
    const showDatasPerPage = 10;
    setPagesMax(Math.ceil(((arrayDatasNonPages.length)/showDatasPerPage)))
    
    // console.log('--- NEW LINE ---');
    // console.log('Total data:', arrayDatasNonPages.length);
    // console.log('Showing datas per page', showDatasPerPage);
    
    // create new variabel 'arrayDatas' with format custom [[{},{}],[{}{}],[{}]] for showing data by page
    let arrayDatas = [];
    for(let i=0; i<pagesMax; i++){
      arrayDatas.push(arrayDatasNonPages.slice(i*showDatasPerPage, (i*showDatasPerPage)+showDatasPerPage));
    }
    setDataLength(arrayDatas.length)
    // console.log('Total Pages:', arrayDatas.length);
    // console.log(arrayDatas);
  
    // create new variabel 'arrayDatasPages' with format custom object of array filtering by 'gender' (male/female/other)
    // then 'setShowDatas' before show to table in client-side
    let arrayDatasPages = [];
    for(var ind in arrayDatas){
      arrayDatasPages.push(arrayDatas[ind]);
    }
    setShowDatas(arrayDatasPages)

  }, [gender, search, pagesMax, dataLength])
  // console.log(showDatas);

  return ( //
  <div className='p-5 App text-info'>

    <div className='pb-4'>Data Table: Search, Filter, & Pagination</div>
    
    <div className='inputsSection pb-3'>

      <div className='pe-2'>
        <div>Search</div>
        <div className="input-group" >
          <input 
            type="text"
            className="form-control"
            placeholder="Search..."
            ref={searchRef}
            defaultValue={search}
          />
          <button
            type='button'
            onClick={handleClickSearch}
            className="input-group-text"
          > @ </button>
        </div>
      </div>

      <div className='pe-2'>
        <div>Gender</div>
        <select
          value={gender}
          className="form-select"
          onChange={(e) => setGender(e.target.value)}
        >
          {selectGender && selectGender.map((d, index) => {
            return <option label={d.label} value={d.value} key={index}/>;
          })}
        </select>
      </div>

      <div>
        <div>.</div>
        <button
          className="btn btn-outline-info"
          onClick={() => handleReset()}
        >
          Reset Filter
        </button>
      </div>
      
    </div>

    <div style={{minHeight: "75vh"}}>
    { !showDatas
      ? <div className='mx-auto' style={{width: "200px"}}> Loading datas table... </div>
      : (showDatas[0] == null) 
        ? <div className='mx-auto' style={{width: "200px"}}> No data... </div>
        : <table className="table text-info">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {showDatas[(pages-1)]?.map((cus, index) =>
                <tr key={index}>
                  <td>{cus.namee}</td>
                  <td>{cus.gender}</td>
                </tr>
              )}
            </tbody>
          </table>
    }
    </div>

    <div className='align-end'>
      Pages: 
      <input
        type='number' min={1} max={pagesMax}
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      from {dataLength} pages
    </div>
  
  </div>
  );
}


// {
//   function sortingNameeDefault(e){
//     nameeValue = defaultDatas;
//     return console.log(nameeValue);
//   }
//   function sortingNameeAZ(e){
//     const test = e.sort();
//     return console.log(test);
//   }
//   function sortingNameeZA(e){
//     const test = e.reverse();
//     return console.log(test);
//   }
//   sortingNameeAZ(nameeValue);
//   sortingNameeZA(nameeValue);
//   sortingNameeDefault(nameeValue);
// }
