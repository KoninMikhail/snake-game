declare type GetFromThemeFn<T, K> = (theme: T, value: keyof K) => string;
