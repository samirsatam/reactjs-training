import * as React from 'react';
import * as format from 'date-fns/format';

import './SiteHeader.css';

interface Props {
    companyName: string;
    sinceWhen: Date;
}
const SiteHeader = (props: Props) => {
    return (
        <header className="site-header">
            <h1>{props.companyName}</h1>
            <h2>Serving your needs since {format(props.sinceWhen, 'MMMM D, YYYY')}</h2>
        </header>
    );
};

export default SiteHeader;