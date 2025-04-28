export type Size = 'sm' | 'md' | 'lg';
export type ExtendedSize = Size | 'xs' | 'xl' | 'xxl';
export type Styles<K extends string | number | symbol, V = React.HTMLAttributes<HTMLElement>['className']> = Record<K, V>;
export type Theme = 'light' | 'dark';
export type Variant = 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost';
