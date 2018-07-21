import React from 'react';


export function CreatedTime ({time, ...props}) {
    return <div {...props}>This AberMUD was created:{time}</div>
}


export function ElapsedTime ({time, ...props}) {
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
        if (r === 60) { return <span>1 minute</span> }
        if (r < 120) { return <span>1 minute and <Seconds r={r} /></span> }
        if (r / 60 === 60) { return <span>1 hour</span> }
        if (r < 3600) { return <span>{r / 60} minutes and <Seconds r={r} /></span> }
        if ((r / 60) % 60 !== 1) {
            return <span><Hours r={r} /> {(r / 60) % 60} minutes.</span>
        } else {
            return <span><Hours r={r} /> 1 minute</span>
        }
    }

    if (!time) {
        return <div {...props}>AberMUD has yet to ever start!!!</div>
    }
    let r = fscanf(time, "%ld");
    fclose(time);

    let ct = time();
    r = ct - r;
    /*
     *
     * Elapsed time and similar goodies
     *
     */
    return <div {...props}>Game time elapsed: {elapse(r)}</div>
}

