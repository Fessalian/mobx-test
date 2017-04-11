import React, { PropTypes, Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool from 'mobx-react-devtools';
import { observer } from 'mobx-react';

import styles from './styles.css'

@observer
class LayoutComponent extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <DevTool/>
                    <div>
                        <h1>TEST TASK</h1>
                        <h4>github
                            &nbsp;
                            <a href="https://github.com/Fessalian/mobx-test" >https://github.com/Fessalian/mobx-test</a>
                        </h4>
                        { this.props.children }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

LayoutComponent.propTypes = {
    children: PropTypes.object.isRequired
};

export default LayoutComponent;
