import { Button } from "@material-ui/core";
import * as React from "react";
import Typer from "./components";
import "./style/app.scss";
import content from "./content.json"
import { Router, navigate, Link } from "@reach/router"
import ReportPage from "./pages/report";
const App: React.FunctionComponent<{}> = () => {
    const [report, setreport] = React.useState<[{ word: string, time: number }]>([])
    return <div>
        <Router >
            <TypingPage path="/" report={report} setreport={setreport} />
            <ReportPage path="/report" report={report} setreport={setreport} />
            <NotFound default />
        </Router>
    </div >
}
export default App

const NotFound: React.FunctionComponent<{ default: boolean }> = () => {
    return <h1>404 Page not found ,<Link to="/">go back</Link></h1>
}
const TypingPage: React.FunctionComponent<{ path: string, report: any[], setreport: Function }> = (props) => {
    const [mode, setmode] = React.useState('words')
    const [choice, setchoice] = React.useState(25)
    const [ended, setended] = React.useState(false)
    React.useEffect(() => {
        console.log({ mode, choice, ended })
        if (ended === true)
            navigate("/report")
    }, [ended])


    return <>  <div className={"menu"} >
        <div>
            {content.modes.map((item, key) => {
                return <Button key={key} className={'menubutton'} onClick={() => {
                    setmode(item.name)
                    setchoice(item.choices[1])
                }}><span style={{ color: mode === item.name ? "#e2b714" : 'gray', fontWeight: 700, fontSize: '12px' }}>{item.name}</span></Button>

            })}
        </div>
        <div>

            {content.modes.map((item) => {
                if (mode === item.name) {
                    return (<>
                        {item.choices.map((item, key) => {
                            return <Button key={key} className={'menubutton'} style={{ color: choice === item ? "yellow" : 'white' }} onClick={() => {
                                setchoice(item)
                            }}><span style={{ color: choice === item ? "#e2b714" : 'gray', fontWeight: 700, fontSize: '12px' }}>{item}</span></Button>
                        })}
                    </>)
                }
                else {
                    return <></>
                }
            })}

        </div>

    </div>
        <Typer choice={choice} mode={mode} ended={ended} setended={setended} {...props} />
    </>
}