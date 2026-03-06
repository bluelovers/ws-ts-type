"use strict";
/**
 * Created by user on 2019/5/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("./util");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const path_1 = require("path");
let skipExists;
skipExists = false;
bluebird_1.default
    .each([
    'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/package.json',
    'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/eslintrc.json',
    'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/travis.json',
    'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/tsconfig.json',
    'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/lerna.json',
], (href) => {
    let handleSchemaBeforeCompile;
    switch ((0, path_1.basename)(href)) {
        case 'package.json':
            // @ts-ignore
            handleSchemaBeforeCompile = (schema) => {
                try {
                    // @ts-ignore
                    delete schema.definitions.coreProperties.patternProperties;
                    // @ts-ignore
                    schema.definitions.coreProperties.additionalProperties = false;
                    // @ts-ignore
                    schema.definitions.coreProperties.additionalItems = false;
                    // @ts-ignore
                    console.dir(schema.definitions.coreProperties);
                }
                catch (e) {
                }
                return schema;
            };
            break;
        case 'lerna.json':
            // @ts-ignore
            handleSchemaBeforeCompile = (schema) => {
                // @ts-ignore
                schema.properties.command.additionalProperties = false;
                // @ts-ignore
                schema.properties.command.additionalItems = false;
                return schema;
            };
            break;
    }
    return (0, util_1.downloadJsonAndBuild)({
        href,
        skipExists,
        handleSchemaBeforeCompile,
    });
})
    .tap(r => console.log(r.length));
/*
downloadJsonAndBuild({
    href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/package.json',
    skipExists,
});

downloadJsonAndBuild({
    href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/eslintrc.json',
    skipExists,
});

downloadJsonAndBuild({
    href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/travis.json',
    skipExists,
});

downloadJsonAndBuild({
    href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/tsconfig.json',
    skipExists,
});

downloadJsonAndBuild({
    href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/lerna.json',
    skipExists,
});
 */
/*
Bluebird.resolve(axios.get('https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/package.json'))
    .then(function (res)
    {
        console.log(`downloaded`);

        if (typeof res.data === 'string')
        {
            return JSON.parse(res.data)
        }

        return res.data
    })
    .tap(function (data)
    {
        return fs.writeJSON(path.join(__dirname, '../schema/package.json'), data, {
            spaces: "\t",
        })
    })
    .tap(function (data)
    {
        console.log(`json saved`);
    })
    .then(function (data)
    {
        console.log(`start compile .d.ts`);

        return compile(data, 'IPackageJson', {
            enableConstEnums: true,
            unreachableDefinitions: true,
        })
    })
    .then(function (ts)
    {
        console.log(`compiled`);

        return fs.writeFile(path.join(__dirname, '../types', 'package.json.d.ts'), ts)
    })
    .tap(function (data)
    {
        console.log(`.d.ts saved`);
    })
;
*/
//# sourceMappingURL=index.js.map