const formatterNumber = Intl.NumberFormat('pt-BR');
const formatterCurrency = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const formatterPercent = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
});

function formatNumber(value:number) {
  return formatterNumber.format(value);
}

function formatCurrency(value:number) {
  return formatterCurrency.format(value);
}

function formatPercent(value:number) {
  return formatterPercent.format(value);
}

export { formatNumber, formatCurrency, formatPercent };
