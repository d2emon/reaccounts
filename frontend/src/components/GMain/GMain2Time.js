import React from 'react';

function elapse (time) {
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

    if (time > 24 * 60 * 60) {
            /* Add a Day ! */
            return "Over a day!!!";
    }
    if (time < 61) { return <Seconds r={time} /> }
    if (time === 60) { return <span><Minutes minutes={1} />.</span> }
    if (time < 120) { return <span><Minutes minutes={1} /> and <Seconds r={time} /></span> }
    if (time / 60 === 60) { return <span>1 hour</span> }
    if (time < 3600) { return <span><Minutes minutes={r / 60} /> and <Seconds r={time} /></span> }

    let minutes = 1;
    if ((time / 60) % 60 !== 1) minutes = (time / 60) % 60;
    return <span><Hours r={time} /> <Minutes minutes={minutes} />.</span>
}

/**
 * Show created time
 * @param time
 * @param props
 * @returns {*}
 * @constructor
 */
export function CreatedTime ({time, ...props}) {
    return <div {...props}>This AberMUD was created:{time}</div>
}

/**
 * Elapsed time and similar goodies
 * @param time
 * @param props
 * @returns {*}
 * @constructor
 */
export function ElapsedTime ({time, ...props}) {
    if (!time) return <div {...props}>AberMUD has yet to ever start!!!</div>;
    return <div {...props}>Game time elapsed: { elapse(time) }</div>;
}

