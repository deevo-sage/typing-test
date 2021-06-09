import * as React from 'react'
import { useEffect, useState } from "react"
import random from 'random-words'
import { Button } from '@material-ui/core'
const Typer: React.FunctionComponent<{ choice: number, mode: string, ended: boolean, setended: Function, report: any[], setreport: Function }> = ({ choice, mode, ended, setended, report, setreport }) => {
    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef()
    const [maintext, setmaintext] = useState(' ')
    const [letters, setletters] = useState([])
    const [text, settext] = useState('')
    const [number, setnumber] = useState(0)
    const [time, settime] = useState(0)
    const [start, setstart] = useState(false)
    const increment = () => {
        setTimeout(() => {
            if (start && !ended)
                settime(time + 0.1)
        }, 100)
    }
    useEffect(() => {
        settime(0)
        settext('')
        setstart(false)
        setreport([])
        if (mode === "words")
            setmaintext(random(choice).join(' '))
        else
            setmaintext(random(Math.floor(choice * 2.5)).join(' '))

    }, [choice, mode])
    useEffect(() => {
        if (mode === "time" && Math.floor(time) === choice) {
            setended(true)
        } if (!ended)
            increment()

    }, [time])
    useEffect(() => {
        if (start) {
            increment()
        }
        else {
            setstart(false)
        }
    }, [start])
    useEffect(() => {
        if (text !== '')
            setstart(true)

        const mainletters = maintext.split('')
        const wordsarr = maintext.split(' ')
        const textarr = text.split(' ')
        const textletter = text.split('')
        let num = 0
        const arr = letters
        textletter.map((item, key) => {
            if (key === textletter.length - 1) {
                let temp = report;
                temp[key] = { word: textletter[key], time }
                setreport(temp)
            }
            if (mainletters[key] === " ")
                num++
            arr[key] = { data: mainletters[key], same: mainletters[key] === item ? "same" : item ? "notsame" : "default" }
        })
        arr[textletter.length] = { data: mainletters[textletter.length], same: mainletters[textletter.length] === textletter[textletter.length] ? "same" : textletter[textletter.length] ? "notsame" : "default" }

        if (num !== number) {
            setnumber(num)
        }
        setletters(arr)

        if (mode === "words" && textletter.length === mainletters.length) {
            setended(true)
        }


    }, [text, maintext])
    useEffect(() => {


        const arr = maintext.split('').map((item: string) => {
            return { data: item, same: "default" }
        })
        setletters(arr)


    }, [])
    useEffect(() => {
        const mainletters = maintext.split('')
        const textletter = text.split('')
        const arr = mainletters.map((item, key) => {
            if (key === textletter.length) {
                let temp = report;
                temp[key] = { word: textletter[key], time }
            }
            return { data: item, same: item === textletter[key] ? "same" : textletter[key] ? "notsame" : "default" }
        })
        setletters(arr)
    }, [maintext])
    return (<div className={"main"}>
        <div className={"heading"}>
            {mode === "words" && <h1 >{number + " / " + choice}</h1>}
            {mode === "time" && <h1>{Math.floor(time)}</h1>}
        </div>
        <h2 onClick={() => {
            ref.current.focus()

        }}>
            {letters.map((item, key) => {
                return <span key={key} style={{ color: item.same === "default" ? "gray" : item.same === "same" ? 'white' : 'red' }}>{item.data}</span>
            })}
        </h2>

        {/* <Timer/> */}

        <input value={text} onChange={(e) => {
            settext(e.target.value)
        }} ref={ref} style={{ opacity: 0, position: 'absolute', top: "-10px" }} />
        <Button onClick={() => {
            if (text !== '') {
                settext('')
                setstart(false)

                settime(0)
                setreport([])
                if (mode === "words")
                    setmaintext(random(choice).join(' '))
                else
                    setmaintext(random(Math.floor(choice * 2.5)).join(' '))
                ref.current.focus()
            }
        }}>Reset</Button>
    </div>)
}

export default Typer