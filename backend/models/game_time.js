import {Exe, ResetT} from "../config";

/**
 * Check for all the created at stuff
 * We use stats for this which is a UN*X system call
 * @returns {Promise<any>}
 */
export const createdTime = () => Exe();

/**
 * Check for reset time
 * @returns {Promise<any>}
 */
export const resetTime = () => ResetT();
