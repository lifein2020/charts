import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() { //props
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 1398,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }, 
      ];
// console.log(props.assetInfo.date)

//     function reduceDate() {
//       return(props.assetInfo.date.split(" "));
//     }
// console.log(reduceDate())

    // const data = [
    //   {
    //     date: props.assetInfo.date,
    //     apr: props.assetInfo.apr,
    //     tvl: props.assetInfo.tvl,
    //   },
    //   {
    //     date: props.assetInfo.date,
    //     apr: props.assetInfo.apr,
    //     tvl: props.assetInfo.tvl,
    //   },
    //   {
    //     date: props.assetInfo.date,
    //     apr: props.assetInfo.apr,
    //     tvl: props.assetInfo.tvl,
    //   },
    //   {
    //     date: props.assetInfo.date,
    //     apr: props.assetInfo.apr,
    //     tvl: props.assetInfo.tvl,
    //   },
    //   {
    //     date: props.assetInfo.date,
    //     apr: props.assetInfo.apr,
    //     tvl: props.assetInfo.tvl,
    //   },
    // ]

    return (
        <div className="chart"> 
            <div className="chartItem">
                <h1 className="chartTitle">Assent APR (y)</h1>
                <ResponsiveContainer width="100%" aspect={2/1} >
                    <AreaChart data={data}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="#ca03fc" stopOpacity={0.3}/>
                        <stop offset="70%" stopColor="#03c2fc" stopOpacity={0.3}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#503885" />
                    <XAxis dataKey="name" stroke="#b18cff" >
                    </XAxis>
                    <YAxis stroke="#b18cff" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#ca03fc" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="chartItem">
                <h1 className="chartTitle">Assent TVL</h1>
                <ResponsiveContainer width="100%" aspect={2/1} >
                    <AreaChart data={data}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="#ca03fc" stopOpacity={0.3}/>
                        <stop offset="70%" stopColor="#03c2fc" stopOpacity={0.3}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#503885" />
                    <XAxis dataKey="name" stroke="#b18cff">
                        {/* <Label value="Assent APR (y)" offset={250} position="top" /> */}
                    </XAxis>
                    <YAxis stroke="#b18cff" />
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#ca03fc" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}