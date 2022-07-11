import { useState, useEffect } from "react";
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

  function getAssetInfo() {
    return fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .then(response => {
      return response.json();
    })
  }

  const [tvlHistoryData, setTvlHistoryData] = useState([]); 

  useEffect(() => {
    getAssetInfo()
    .then((data) => {
      //console.log(data)
      let asset = data.data.find(item => item.assetId === "ETH_Aave__WBTC");
      //console.log(asset);
      
      // if (!asset) {
      //   return console.log("there is no such asset")
      // }
      // let tvlHistoryArr  = asset.selected_farm[0].tvlStakedHistory;

      let tvlHistoryArr = asset.selected_farm[0].tvlStakedHistory.splice(0, 10).reverse();
      //tvlHistoryArr = tvlHistoryArr.splice(0, 10).reverse();
      //console.log(tvlHistoryArr);
      let key;
      let dateMonth;
      for (key in tvlHistoryArr) {
        let m1 = tvlHistoryArr[key].date.slice(5, 7);
        let m2 = tvlHistoryArr[key].date.slice(8);
        let arr = [m1, m2];
        
        switch (arr[0]) {
          case "01":
            arr[0] = "Jan";
            dateMonth = arr.join(' ');
            break;

            case "02":
              arr[0] = "Feb";
              dateMonth = arr.join(' ');
              break;  
    
            case "03":
              arr[0] = "Mar";
              dateMonth = arr.join(' ');
              break; 
    
            case "04":
              arr[0] = "Apr";
              dateMonth = arr.join(' ');
              break; 
            
            case "05":
              arr[0] = "May";
              dateMonth = arr.join(' ');
              break;
    
            case "06":
              arr[0] = "Jun";
              dateMonth = arr.join(' ');
            
              break;
    
            case "07":
              arr[0] = "Jul";
              dateMonth = arr.join(' ');
              break;
            
            case "08":
              arr[0] = "Aug";
              dateMonth = arr.join(' ');
              break;

            case "09":
              arr[0] = "Sep";
              dateMonth = arr.join(' ');
              break;
            
            case "10":
              arr[0] = "Oct";
              dateMonth = arr.join(' ');
              break;
            
            case "11":
              arr[0] = "Nov";
              dateMonth = arr.join(' ');
              break;

            case "12":
              arr[0] = "Dec";
              dateMonth = arr.join(' ');
              break;
    
              default:
              arr[0] = "";
              break;
        }

        tvlHistoryArr[key].date = dateMonth;
      }

      setTvlHistoryData(tvlHistoryArr);
     
    //  function formatData (data) {
    //  return data.map((item) => ({
    //    // date -> Can be used as dataKey for XAxis
    //    //Further you can format the date as per your need
    //    date: item.date,
    //    // temp -> Can be used as dataKey for Line
    //    value: item.value
    //  }));
    // }
    //  setTvlHistory(formatData(tvlHistoryArr));


    })
    .catch((err) => {
      console.log(`"Error: " ${err}`);
    })
    .finally(() => {
        console.log(true)
    });
  }, [])

  return (
    <div className="App">
      <Chart tvlHistoryData={tvlHistoryData} />
    </div>
  );
}

export default App;


// function getResponse () {
// return fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000')
//   .then(function (response) {
//     if (response.status !== 200) {
//       return Promise.reject(new Error(response.statusText));
//     }
//     return Promise.resolve(response);
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//     let asset = data.data.find(item => item.assetId === "ETH_Aave__WBTC");
//     console.log(asset);
//   })
//   .catch(function (error) {
//     console.log('error', error);
//   })
// }

// getResponse ();