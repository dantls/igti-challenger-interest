import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import Input from '../components/Input';
import Header from '../Header';
import { interest, ParcelProps } from '../utils/interest';
import Installment from '../components/Installment';
import Installments from '../components/Installments';

const Home: React.FC = () => {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(0.5);
  const [period, setPeriod] = useState(12);
  const [parcels, setParcels] = useState<ParcelProps[]>([]);

  useEffect(() => {
    setParcels(interest(period, monthlyInterest, initialValue));
  }, [initialValue, monthlyInterest, period]);

  return (
    <Container>
      <Header title="React - Juros Compostos" />
      <Content>
        <div>
          <Input
            name="initialValue"
            label="Montante inicial"
            placeholder="R$"
            value={initialValue}
            onChange={({ target }) => setInitialValue(Number(target.value))}
          />
          <Input
            name="monthlyInterest"
            label="Taxa de juros(Mês)"
            min="-12"
            max="12"
            step="0.1"
            placeholder="%"
            value={monthlyInterest}
            onChange={({ target }) => setMonthlyInterest(Number(target.value))}
          />
          <Input
            name="period"
            label="Período(Meses)"
            placeholder="01"
            min="1"
            max="36"
            value={period}
            onChange={({ target }) => {
              setPeriod(Number(target.value));
            }}
          />
        </div>

      </Content>
      <Installments>
        {parcels.map((parcel:ParcelProps) => <Installment key={parcel.month} parcel={parcel} />)}
      </Installments>
    </Container>
  );
};

export default Home;
