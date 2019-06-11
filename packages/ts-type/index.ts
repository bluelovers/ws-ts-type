
export * from './lib';
export * from 'typedarray-dts';

export type ITSType = typeof import('./index');
export type ITSTypeBuildIn = typeof import('./lib/_build-in');

export default ITSType;
