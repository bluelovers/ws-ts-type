/**
 * @see https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 */
export type ITSLogicIsAny<T> = 0 extends (1 & T) ? true : false;
export type ITSLogicNotAny<T> = true extends ITSLogicIsAny<T> ? false : true;
