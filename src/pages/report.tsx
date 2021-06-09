import * as React from "react";
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList
} from "recharts"
import { navigate, Link } from "@reach/router"

const test = [{ "word": "s", "time": 0 }, { "word": "n", "time": 0 }, { "word": "a", "time": 0.1 }, { "word": "k", "time": 0.6 }, { "word": "e", "time": 0.7 }, { "word": " ", "time": 0.7999999999999999 }, { "word": "f", "time": 1.2 }, { "word": "l", "time": 1.3 }, { "word": "o", "time": 1.5000000000000002 }, { "word": "w", "time": 1.6000000000000003 }, { "word": "e", "time": 1.7000000000000004 }, { "word": "r", "time": 2.0000000000000004 }, { "word": " ", "time": 2.1000000000000005 }, { "word": "d", "time": 2.3000000000000007 }, { "word": "o", "time": 2.400000000000001 }, { "word": "n", "time": 2.600000000000001 }, { "word": "e", "time": 2.700000000000001 }, { "word": " ", "time": 2.9000000000000012 }, { "word": "i", "time": 3.0000000000000013 }, { "word": "n", "time": 3.2000000000000015 }, { "word": "s", "time": 3.3000000000000016 }, { "word": "t", "time": 3.5000000000000018 }, { "word": "e", "time": 4.5 }, { "word": "A", "time": 4.6 }, { "word": "D", "time": 4.699999999999999 }, { "word": " ", "time": 4.799999999999999 }, { "word": "C", "time": 5.799999999999995 }, { "word": "H", "time": 5.899999999999995 }, { "word": "A", "time": 5.999999999999995 }, { "word": "R", "time": 6.199999999999994 }, { "word": "A", "time": 6.399999999999993 }, { "word": "C", "time": 6.5999999999999925 }, { "word": "T", "time": 6.799999999999992 }, { "word": "E", "time": 6.8999999999999915 }, { "word": "R", "time": 6.999999999999991 }, { "word": " ", "time": 8.799999999999985 }, { "word": "f", "time": 9.099999999999984 }, { "word": "l", "time": 9.299999999999983 }, { "word": "i", "time": 9.499999999999982 }, { "word": "g", "time": 9.599999999999982 }, { "word": "h", "time": 10.499999999999979 }, { "word": "t", "time": 10.599999999999978 }, { "word": " ", "time": 10.799999999999978 }, { "word": "a", "time": 11.099999999999977 }, { "word": "r", "time": 11.299999999999976 }, { "word": "m", "time": 11.499999999999975 }, { "word": " ", "time": 11.599999999999975 }, { "word": "h", "time": 12.299999999999972 }, { "word": "i", "time": 12.499999999999972 }, { "word": "s", "time": 12.599999999999971 }, { "word": " ", "time": 12.69999999999997 }, { "word": "p", "time": 12.99999999999997 }, { "word": "r", "time": 13.09999999999997 }, { "word": "i", "time": 13.399999999999968 }, { "word": "d", "time": 13.499999999999968 }, { "word": "e", "time": 13.699999999999967 }, { "word": " ", "time": 13.799999999999967 }, { "word": "w", "time": 14.099999999999966 }, { "word": "a", "time": 14.299999999999965 }, { "word": "n", "time": 14.399999999999965 }, { "word": "t", "time": 14.499999999999964 }, { "word": " ", "time": 14.599999999999964 }, { "word": "s", "time": 15.099999999999962 }, { "word": "l", "time": 15.199999999999962 }, { "word": "e", "time": 15.299999999999962 }, { "word": "p", "time": 15.499999999999961 }, { "word": "t", "time": 15.79999999999996 }, { "word": " ", "time": 15.89999999999996 }, { "word": "s", "time": 16.399999999999963 }, { "word": "c", "time": 16.599999999999966 }, { "word": "i", "time": 16.79999999999997 }, { "word": "e", "time": 16.89999999999997 }, { "word": "n", "time": 16.99999999999997 }, { "word": "t", "time": 17.199999999999974 }, { "word": "i", "time": 17.69999999999998 }, { "word": "s", "time": 17.899999999999984 }, { "word": " ", "time": 23.10000000000006 }, { "word": " ", "time": 23.400000000000063 }, { "word": "f", "time": 23.800000000000068 }, { "word": "a", "time": 24.100000000000072 }, { "word": "r", "time": 24.500000000000078 }, { "word": " ", "time": 24.70000000000008 }, { "word": "r", "time": 25.100000000000087 }, { "word": "e", "time": 25.30000000000009 }, { "word": "m", "time": 26.0000000000001 }, { "word": "e", "time": 26.1000000000001 }, { "word": "m", "time": 26.300000000000104 }, { "word": "b", "time": 26.600000000000108 }, { "word": "e", "time": 26.70000000000011 }, { "word": "r", "time": 26.80000000000011 }, { "word": " ", "time": 27.000000000000114 }, { "word": "s", "time": 27.300000000000118 }, { "word": "a", "time": 27.40000000000012 }, { "word": "l", "time": 27.600000000000122 }, { "word": "t", "time": 27.700000000000124 }, { "word": " ", "time": 28.400000000000134 }, { "word": "r", "time": 28.500000000000135 }, { "word": "a", "time": 28.700000000000138 }, { "word": "n", "time": 28.80000000000014 }, { "word": " ", "time": 29.000000000000142 }, { "word": "t", "time": 29.200000000000145 }, { "word": "h", "time": 29.400000000000148 }, { "word": "r", "time": 29.50000000000015 }, { "word": "e", "time": 29.700000000000152 }, { "word": "a", "time": 30.000000000000156 }]
const ReportPage: React.FunctionComponent<{ path: string, report: [{ word: string, time: number }], setreport: Function }> = ({ report, setreport }) => {
    const [data, setdata] = React.useState([])
    const [wpm, setwpm] = React.useState([])
    const [avg, setavg] = React.useState(0)
    console.log(JSON.stringify(report))
    React.useEffect(() => {
        if (report[0] == undefined) {
            navigate('/')
        }
        const words = []
        let temp = "";
        report.forEach((item, key) => {
            if (item.word === " ") {
                words.push({ word: temp, time: Math.floor((report[key - 1].time) * 100) / 100, count: words.length, wpm: ((words.length + 1) / item.time) * 60 })
                temp = ""
            }
            else temp += item.word
        })
        let sum = 0;
        words.forEach((item) => {
            sum += item.wpm;

        }, [])
        setavg(Math.floor((sum / words.length) * 10) / 10)
        setwpm(words)
    }, [])
    return <div className="main">
        <ResponsiveContainer width="50%" height="50%">
            <LineChart
                width={500}
                height={500}
                data={wpm}
            >
                <XAxis dataKey="time" />
                <YAxis dataKey="wpm" />
                <Tooltip />
                <Line dataKey="wpm" type="monotone" stroke="rgb(187, 143, 0)" activeDot={{ r: 6 }} strokeWidth="2px" yAxisId={0} />
            </LineChart>
        </ResponsiveContainer>
        <div className="reportdetail">
            <div>
                <h3>WPM</h3>
                <h2>{avg}</h2>
            </div>
            <div>
                <h3>characters</h3>
                <h2>{report.length}</h2>
            </div>
            <div>
                <h3>words</h3>
                <h2>{wpm.length}</h2>
            </div>
        </div>
    </div>
}
export default ReportPage