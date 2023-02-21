export type AssertPositive<N extends number> = number extends N
    ? N
    : `${N}` extends `-${string}`
    ? never
    : N;
