import IPackageJson from '../../package-json';
export declare function isPackageJsonLike<T extends Record<any, any>>(pkg: Extract<T, IPackageJson>): Extract<T, IPackageJson<any>>;
export declare function notPackageJsonLike<T extends Record<any, any>>(pkg: Exclude<T, IPackageJson>): any;
export declare let exportedType: {
    [x: string]: any;
    version?: string;
    description?: string;
    dependencies?: import("../../types/package.json").Dependency;
    devDependencies?: import("../../types/package.json").Dependency;
    peerDependencies?: import("../../types/package.json").Dependency;
    optionalDependencies?: import("../../types/package.json").Dependency;
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
    bin?: string | {
        [k: string]: string;
    };
    type?: string;
    types?: string;
    typings?: string;
    typesVersions?: {
        [k: string]: {
            "*"?: string[];
        };
    };
    man?: string[];
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
    };
    config?: {
        [k: string]: unknown;
    };
    resolutions?: import("../../types/package.json").Dependency;
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
    workspaces?: string[];
    publishConfig?: import("../../package-json").IPackageJsonPublishConfig;
    private?: boolean | "true" | "false";
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
    flat?: boolean;
    installConfig?: import("../../lib/package-json/yarn").IYarnV1PackageJsonInstallConfig;
};
