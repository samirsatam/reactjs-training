import * as React from 'react';
import TxDetail from '../components/TxDetail';
import ButtonBar from '../../common/components/ButtonBar';
import { getTransactions } from '../mock-tx';
import Transaction from '../Transaction';

interface LocalState {
  index: number;
}

export default class TxContainer extends React.Component<object, LocalState> {
  transactions: Transaction[];

  constructor(props: object) {
    super(props);
    this.transactions = getTransactions();
    this.state = {
      index: 0
    };
  }

  handlePrevious = () => {
    let index = this.state.index;
    index = Math.max(index - 1, 0);

    this.setState({ index });
  }

  handleNext = (event: React.SyntheticEvent<HTMLElement>) => {
    let index = this.state.index;
    index = Math.min(index + 1, this.transactions.length - 1);

    this.setState({ index });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <TxDetail tx={this.transactions[this.state.index]} />
          </div>
        </div>
        <ButtonBar
          onNext={this.handleNext}
          onPrevious={this.handlePrevious}
          nextButtonDisabled={this.state.index === this.transactions.length - 1}
          previousButtonDisabled={this.state.index === 0}
        />
      </div>
    );
  }
}
