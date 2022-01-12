import IPackageJson from '../../package-json';
export declare function isPackageJsonLike<T extends Record<any, any>>(pkg: Extract<T, IPackageJson>): Extract<T, IPackageJson<any>>;
export declare function notPackageJsonLike<T extends Record<any, any>>(pkg: Exclude<T, IPackageJson>): any;
export declare let exportedType: {
    [x: string]: any;
    description?: string;
    version?: string;
    name?: string;
    keywords?: string[];
    homepage?: string;
    bugs?: string | {
        [k: string]: unknown;
        url?: string;
        email?: string;
    };
    license?: string;
    licenses?: {
        [k: string]: unknown;
        type?: string;
        url?: string;
    }[];
    author?: import("../../types/package.json").Person;
    contributors?: import("../../types/package.json").Person[];
    maintainers?: import("../../types/package.json").Person[];
    files?: string[];
    main?: string;
    exports?: string | {
        [k: string]: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
        "."?: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
    } | {
        [k: string]: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
        require?: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
        import?: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
        node?: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
        default?: import("../../types/package.json").PackageExportsEntry | import("../../types/package.json").PackageExportsFallback;
    } | import("../../types/package.json").PackageExportsEntry[];
    bin?: string | {
        [k: string]: string;
    };
    type?: "module" | "commonjs";
    types?: string;
    typings?: string;
    typesVersions?: {
        [k: string]: {
            "*"?: string[];
        };
    };
    man?: string | string[];
    directories?: {
        [k: string]: unknown;
        bin?: string;
        doc?: string;
        example?: string;
        lib?: string;
        man?: string;
        test?: string;
    };
    repository?: string | {
        [k: string]: unknown;
        type?: string;
        url?: string;
        directory?: string;
    };
    scripts?: {
        [k: string]: string;
        lint?: string;
        prepublish?: string;
        prepare?: string;
        prepublishOnly?: string;
        prepack?: string;
        postpack?: string;
        publish?: string;
        postpublish?: string;
        preinstall?: string;
        install?: string;
        postinstall?: string;
        preuninstall?: string;
        uninstall?: string;
        postuninstall?: string;
        preversion?: string;
        version?: string;
        postversion?: string;
        pretest?: string;
        test?: string;
        posttest?: string;
        prestop?: string;
        stop?: string;
        poststop?: string;
        prestart?: string;
        start?: string;
        poststart?: string;
        prerestart?: string;
        restart?: string;
        postrestart?: string;
        serve?: string;
    };
    config?: {
        [k: string]: unknown;
    };
    peerDependenciesMeta?: {
        [k: string]: {
            [k: string]: unknown;
            optional?: boolean;
        };
    };
    bundledDependencies?: boolean | string[];
    bundleDependencies?: boolean | string[];
    packageManager?: string;
    engines?: {
        [k: string]: string;
        node?: string;
    };
    engineStrict?: boolean;
    os?: string[];
    cpu?: string[];
    preferGlobal?: boolean;
    dist?: {
        [k: string]: unknown;
        shasum?: string;
        tarball?: string;
    };
    readme?: string;
    module?: string;
    esnext?: string | {
        [k: string]: string;
        main?: string;
        browser?: string;
    };
    jspm?: import("../../types/package.json").JSONSchemaForNPMPackageJsonFiles1;
    workspaces?: string[];
    publishConfig?: import("../../package-json").IPackageJsonPublishConfig;
    private?: boolean | import("../../lib/types").IBooleanString;
    gitHead?: string;
    unpkg?: string;
    browserslist?: string[];
    browser?: string | Record<string, string> | Record<string, boolean>;
    es2015?: string;
    esm?: boolean;
    'react-native'?: string;
    sideEffects?: boolean;
    source?: string;
    'umd:main'?: string;
    dependencies?: import("../../package-json").IDependency;
    devDependencies?: import("../../package-json").IDependency;
    peerDependencies?: import("../../package-json").IDependency;
    optionalDependencies?: import("../../package-json").IDependency;
    flat?: boolean;
    installConfig?: import("../../lib/package-json/yarn").IYarnV1PackageJsonInstallConfig;
    resolutions?: import("../../package-json").IDependency;
};
