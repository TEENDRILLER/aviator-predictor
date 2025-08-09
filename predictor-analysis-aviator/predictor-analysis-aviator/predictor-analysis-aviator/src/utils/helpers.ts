export function formatData(data: any): string {
    // Format the data into a readable string
    return JSON.stringify(data, null, 2);
}

export function calculateAverage(numbers: number[]): number {
    // Calculate the average of an array of numbers
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

export function isValidNumber(value: any): boolean {
    // Check if the value is a valid number
    return typeof value === 'number' && !isNaN(value);
}