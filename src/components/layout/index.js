import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool from 'mobx-react-devtools';
import {observer} from 'mobx-react';

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
