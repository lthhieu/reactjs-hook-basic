import React, { useEffect, useState } from 'react';
export class Countdown extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state
            this.setState({ count: count - 1 })
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        let { count } = this.state
        let { handleTimeup } = this.props
        if (prevState.count !== count && count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // handleTimeup()
            }
        }
    }
    render() {
        let { count } = this.state
        return (<div>Time left: {count}</div>)
    }
}
export const CountdownHook = (props) => {
    let [count, setCount] = useState(10)
    let { handleTimeup } = props
    useEffect(() => {
        if (count === 0) {
            // handleTimeup()
            return
        }
        let timer = setTimeout(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [count])
    return (<div>Time left: {count}</div>)
}