import { InjectionToken } from "@angular/core"

export type Env = {
    cdn: string,
    shell: string,
    mfe: string,
    api: string
}

export const MFE_ENV = new InjectionToken<Env>('mfe-env-token');