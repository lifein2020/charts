import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({aprHistoryData, tvlHistoryData}) {

    return (
        <div className="chart"> 
            <div className="chartItem">
            {/* Как можно использовать массив объектов (api JSON), переданного через props
                <ul>
                   {props.tvlHistory.map((item, index) => {
                      return (
                          <li key={index}>{item.value}</li>
                      )
                    })}
                </ul> */}

                <h1 className="chartTitle">Assent APR (y)</h1>
                <ResponsiveContainer width="100%" aspect={2/1} >
                    <AreaChart data={aprHistoryData}  margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="#ca03fc" stopOpacity={0.3}/>
                        <stop offset="70%" stopColor="#03c2fc" stopOpacity={0.3}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#503885" />
                    <XAxis dataKey="date" stroke="#b18cff">
                    </XAxis>
                    <YAxis stroke="#b18cff" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#ca03fc" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="chartItem">
                <h1 className="chartTitle">Assent TVL</h1>
                {/* https://evogeek.ru/questions/67470647/
                 динамический ключ key={`rc_${tvlHistoryData.length}`} для того, чтобы когда добавляется новая точка данных, ключ автоматически увеличивается на 1, и поэтому выполняется повторная визуализация всего объекта.*/}
                <ResponsiveContainer width="100%" aspect={2/1} key={`rc_${tvlHistoryData.length}`} >
                    <AreaChart data={tvlHistoryData}  margin={{ top: 20, right: 30, left: 30, bottom: 0 }} key={`lc_${tvlHistoryData.length}`}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="#ca03fc" stopOpacity={0.3}/>
                        <stop offset="70%" stopColor="#03c2fc" stopOpacity={0.3}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#503885" />
                        <XAxis dataKey="date" stroke="#b18cff" >
                        </XAxis>
                    <YAxis stroke="#b18cff">
                     </YAxis>         
                    <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#ca03fc" fillOpacity={1} fill="url(#colorUv)" key={`l_${tvlHistoryData.length}`}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}