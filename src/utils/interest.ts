export interface ParcelProps {
  month: number;
  amountSumValueRate: number;
  valueRate: number;
  sumPercentRate: number;
}

export function interest(period : number, rate: number, amount: number) : ParcelProps[] {
  const totalMonth:ParcelProps[] = [
    {
      month: 0,
      valueRate: 0,
      amountSumValueRate: 0,
      sumPercentRate: 0,
    },
  ];
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= period; index++) {
    const month = index;
    const amountSumValueRate = amount * (1 + rate / 100) ** index;
    const valueRate = amountSumValueRate - amount;

    totalMonth[index - 1] = {
      month,
      amountSumValueRate,
      valueRate,
      sumPercentRate: valueRate / amount,
    };
  }
  return totalMonth;
}
