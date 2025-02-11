export function formatValueWithPrefix(value: number, prefix: string | undefined = ""): string {
    return `${prefix}${value.toLocaleString()}`;
}