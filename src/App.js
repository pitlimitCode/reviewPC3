import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  // const [namee, setNamee] = useState(null);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState(null);
  const [datas, setDatas] = useState(null);
  
  function handleSearch(e){ setSearch(e) };
  // console.log(search);
  function handleOption(e){ setGender(e) };
  // console.log(gender);
  
  useEffect(() => {
    // fetch("https://randomuser.me/api?results=5")
    fetch(`https://randomuser.me/api?results=5&gender=${gender}`)
      .then((res) => (res.json()))
      .then((res) => {
        setDatas(res.results)
        // setNamee(res.results[0].name.first)
        let choosenKey = res.results;
        for (let key in choosenKey){
          choosenKey[key] = {
            "namee" : choosenKey[key]["name"]["first"],
            "gender" : choosenKey[key]["gender"]
          };
        }
        // setDatas(choosenKey);
      });
  }, [gender]);
  // console.log(datas)
  // console.log(namee)
  
  return (
  <div className='p-5 App text-info'>

    <div className='pb-4'>Data Table: Search, Filter, & Pagination</div>

    { datas
      ? <>
          <div className='inputs pb-3'>

            {/* <div>
              <div>Search</div>
              <input className="form-control" placeholder='Search...' onChange={(e) => handleSearch(e.target.value)}/>
            </div> */}

            <div>
              <div>Search</div>
            <div className="input-group" style={{width: '200px'}}>
              <input type="text" className="form-control" placeholder="Search..."/>
              <button type='button' className="input-group-text">@</button>
            </div>
            </div>
            
            <div>
            <div>Gender</div>
            <select className="form-select" onChange={(e) => handleOption(e.target.value)}>
              <option label='Select gender' defaultValue={null}/>
              <option label="male" value="male"/>
              <option label="female" value="female"/>
            </select>
            </div>
              
            <div>
            <div>.</div>
            <button type="button" className="btn btn-outline-info">Reset Filter</button>
            </div>
            
          </div>

          <table className="table text-info">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((cus, index) => <tr key={index}>
                <td>{cus.namee}</td>
                <td>{cus.gender}</td>
              </tr> )}
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark2</td>
              </tr> */}
            </tbody>
          </table>

          <div className='align-end'>Page Move</div>
        </>
      : <div className='mx-auto' style={{width: "200px"}}>Loading datas table...</div>
    }

  </div>
  );
}
