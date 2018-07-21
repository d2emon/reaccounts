import React from 'react';


export function CreatedTime ({time, ...props}) {
    return <div {...props}>This AberMUD was created:{time}</div>
}


/*
 * Elapsed time and similar goodies
 */
export function ElapsedTime ({time, ...props}) {
    function Minutes ({minutes, ...props}) {
        if (minutes === 1) {
            return <span {...props}>1 minute</span>
        }
        return <span {...props}>{minutes} minutes</span>
    }

    function Seconds ({r, ...props}) {
	    let seconds = r % 60;
        if (seconds === 1) {
            return <span {...props}>1 second</span>
        }
        return <span {...props}>{seconds} seconds.</span>
    }

    function Hours ({r, ...props}) {
	    if (r < 7200) {
            return <span {...props}>1 hour and </span>
        } else {
            return <span {...props}>{r / 3600} hours and </span>
        }
    }

    function elapse (r) {
        if (r > 24 * 60 * 60) {
            /* Add a Day ! */
            return "Over a day!!!";
        }
        if (r < 61) { return <Seconds r={r} /> }
        if (r === 60) { return <span><Minutes minutes={1} />.</span> }
        if (r < 120) { return <span><Minutes minutes={1} /> and <Seconds r={r} /></span> }
        if (r / 60 === 60) { return <span>1 hour</span> }
        if (r < 3600) { return <span><Minutes minutes={r / 60} /> and <Seconds r={r} /></span> }
        if ((r / 60) % 60 !== 1) {
            return <span><Hours r={r} /> <Minutes minutes={(r / 60) % 60} />.</span>
        } else {
            return <span><Hours r={r} /> <Minutes minutes={1} />.</span>
        }
    }

    return time
        ? <div {...props}>Game time elapsed: {elapse(time)}</div>
        : <div {...props}>AberMUD has yet to ever start!!!</div>;
}

