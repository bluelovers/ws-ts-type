import { IDependency } from './types';
export interface IYarnV1PackageJsonInstallConfig {
    pnp?: boolean;
    [k: string]: unknown;
}
export interface IPackageJsonExtendYarn {
    flat?: boolean;
    installConfig?: IYarnV1PackageJsonInstallConfig;
    resolutions?: IDependency;
}
