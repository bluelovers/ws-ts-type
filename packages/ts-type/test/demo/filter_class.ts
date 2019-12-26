/**
 * https://stackoverflow.com/a/55479659/4563339
 */
import {
	ITSExcludeKeyofRecord,
	ITSExcludeRecord,
	ITSExclude2,
	ITSExtract2,
	ITSValueOf,
	ITSRecordExcludeToKey,
	ITSRecordExtractToKey,
	ITSKeyOfRecordExcludeToKey,

	ITSOmitRecordType,
	ITSPickRecordType,
} from '../../lib';

export let C1 = {
	a: 1,

	b(){},
}

export let t1: ITSOmitRecordType<typeof C1, Function> = {
	a: 1,
}

export let t2: ITSPickRecordType<typeof C1, Function> = {
	b(){},
}
