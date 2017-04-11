import CSSModules from 'react-css-modules';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import DevTool from 'mobx-react-devtools';
import {observer} from 'mobx-react';

import styles from './styles.css'

@observer
class LayoutComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <DevTool/>
                    <div>
                        <h1>TEST TASK</h1>
                        { this.props.children }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LayoutComponent;
