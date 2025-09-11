export function evenodd(arr: number[]): { even: number[]; odd: number[] } {
  const even: number[] = [];
  const odd: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
  }
  return { even, odd };
}
