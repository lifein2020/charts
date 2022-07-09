// import { useState, useEffect } from "react";
import Chart from "./components/chart/Chart";
//const axios = require('axios').default;

function App() {

  // function getAssetInfo() {
  //   return fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
  //   .then((resp) => {
  //     console.log(resp)
  //     if(resp.ok) {
  //       return resp.json();
  //     }
  //     return Promise.reject(`Error: ${resp.status}`);
  //   })
  // }

  // const [assetInfo, setAssetInfo] = useState([]); //asset.dateAdded

  // useEffect(() => {
  //   getAssetInfo()
  //   .then((data) => {
  //     console.log(data)
  //     let asset = data.data.find(item => item.assetId === "BSC_Ellipsis__3EPS");
  //     console.log(asset.dateUpdated)
  //     // let n1 = asset.dateUpdated.slice(5, 7);
  //     // let n2 = asset.dateUpdated.slice(8, 10);
  //     // let arr = [n1, n2];
  //     // console.log(arr)
  //     // let dateX
  //     // switch (arr[0]) {
  //     //   case "01":
  //     //     arr[0] = "Jan";
  //     //     break;

  //     //   case "02":
  //     //     arr[0] = "Feb";
  //     //     break;  

  //     //   case "03":
  //     //     arr[0] = "Mar";
  //     //     break; 

  //     //   case "04":
  //     //     arr[0] = "Apr";
  //     //     break; 
        
  //     //   case "05":
  //     //     arr[0] = "May";
  //     //     break;

  //     //   case "06":
  //     //     arr[0] = "Jun";
  //     //     dateX = arr.join(' ');
  //     //     console.log(dateX)
  //     //     break;

  //     //   case "07":
  //     //     arr[0] = "Jul";
  //     //     break;

  //     //     default:
  //     //       arr[0] = "";
  //     //     break;
  //     // }

  //     //let s = new Date(Date.parse(asset.dateUpdated));
  //     // let s = new Date(asset.dateUpdated);
  //     // console.log(s)
  //     // let s1 = JSON.stringify(s).slice(6, 8);
  //     // let s2 = JSON.stringify(s).slice(9, 11);
  //     // console.log(arr)
  //     // // console.log(s.getMonth());
  //     // console.log(typeof(s.getDate()));
  //     // let date = new Date(2022, s.getMonth(), s.getDate())
  //     // console.log(JSON.stringify(date))
  //     // let d = new Date(s.setDate(s.getDate() - 3))
  //     // console.log(d);

  //     if (asset) {
  //       setAssetInfo({
  //         date: /*dateX,*/  asset.dateUpdated,
  //         apr: asset.aprDaily,
  //         tvl: asset.tvlFarm,
  //       })
  //     }
  //     else console.log("there is no such asset")
  //   })
  //   .catch((err) => {
  //     console.log(`"Error: " ${err}`);
  //   })
  //   .finally(() => {
  //       console.log(true)
  //   });
  // }, [])

  return (
    <div className="App">
      {/* <Chart assetInfo={assetInfo}/> */}
      <Chart />
    </div>
  );
}

export default App;

// -- 1 --
// function search(assetId){
//   return fetch("https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000")
// .then((res) => {
//   if(res.ok) {
//     return res.json;
//   }
//   return Promise.reject(res.status);
// })
// .then((res) => {
//   console.log(res.assetId)
// })
// .catch((err) => {
//   console.log(`"Error: " ${err}`)
// })
// .finally(() => {
//   console.log(true)
// });
// }

// console.log(search('asset'));


// -- 2 --
// function getAssetInfo() {
//   return fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
//   .then((resp) => {
//     // console.log(resp)
//     if(resp.ok) {
//       // console.log(resp.json());
//       console.log(resp.text());
//       //console.log(JSON.parse(resp.text()));
//     }
//     return Promise.reject(`Error: ${resp.status}`);
//   })
//   .then((data) => {
//     console.log(data) //data.data[0].selected_farm.tvlStakedHistory

//     let key
//     for (key in data.data) {
//       console.log(data.data[key].asset);
//     }

//     let asset = data.data.find(item => item.assetId === "BSC_Ellipsis__3EPS")
//     // console.log(asset)
//     if (asset) {
//       console.log(`${asset.aprYearly}, ${asset.dateUpdated}, ${asset.aprDaily}, ${asset.tvlFarm}`)
//       // console.log(asset);
//     }
//     else console.log("there is no such asset")
    
//   })
//   .catch((err) => {
//     console.log(`"Error: " ${err}`);
//   })
//   .finally(() => {
//       // console.log(true)
//   });
// }


// console.log(getAssetInfo())

// --- 3  ---

// async function getResponse () {
//   let response = await fetch ('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
//   let content = await response.text();
//   console.log(content);
//   //console.log(JSON.parse(content));
// }

// --- 4 ---

// function getResponse () {
//  return axios.get('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
//  .then(response => {
//   console.log("response", response)
// })
// .catch(error => console.log(error))
// }

// --- 4 ---


function getResponse () {
return fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    let asset = data.data.find(item => item.assetId === "ETH_Aave__WBTC");
    console.log(asset);
  })
  .catch(function (error) {
    console.log('error', error);
  })
}

getResponse ();






//http://webdiz.com.ua/metod-fetch-poluchenie-dannykh-s-servera/
//console.log('data', data)