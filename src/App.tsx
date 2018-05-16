import * as React from 'react';
import './App.css';
import SiteHeader from './common/components/SiteHeader';
import TxContainer from './tx/containers/TxContainer';

class App extends React.Component {
  public render() {
    const today = new Date();
    return (
      <main className="container">
        <SiteHeader companyName="The Super-Fake Banking Corporation." sinceWhen={today}/>
        <section>
          <div className="row">
            <div className="col">
              <TxContainer/>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
