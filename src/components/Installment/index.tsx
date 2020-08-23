import React from 'react';
import { ParcelProps } from '../../utils/interest';
import { formatNumber, formatCurrency, formatPercent } from '../../utils/formatHelpers';

import { Container, Month } from './styles';

interface InstallmentProps {
  parcel: ParcelProps;
}

const Installment: React.FC<InstallmentProps> = ({ parcel }) => {
  const {
    amountSumValueRate, month, sumPercentRate, valueRate,
  } = parcel;
  return (
    <Container>
      <Month>{formatNumber(month)}</Month>
      <div>
        <div>{formatCurrency(amountSumValueRate)}</div>
        <div>{formatCurrency(valueRate)}</div>
        <div>{formatPercent(sumPercentRate)}</div>
      </div>
    </Container>
  );
};

export default Installment;
