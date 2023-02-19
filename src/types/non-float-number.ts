export type NonFloatNumber<T extends number> = `${T}` extends `${string}.${string}` ? never : T;
