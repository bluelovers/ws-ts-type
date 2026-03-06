/**
 * 內部過濾工具（內部使用）
 * Internal Filter Utilities (Internal Use)
 * 
 * 提供內部使用的過濾類型工具
 * Provides internal filter type utilities
 */

import { ITSExtract2 } from '../helper/filter';

/**
 * 根據匹配鍵過濾記錄（內部使用）
 * Filter record by matching keys (internal use)
 * 
 * @internal
 */
type I_RecordOfMatchKey<M, T, K extends keyof M = keyof M> = {
	[P in K]: ITSExtract2<M[P], T, P>;
};

/**
 * 根據匹配值過濾記錄（內部使用）
 * Filter record by matching values (internal use)
 * 
 * @internal
 */
type I_RecordOfMatchValue<M, T, K extends keyof M = keyof M> = {
	[P in K]: ITSExtract2<M[P], T>;
};
