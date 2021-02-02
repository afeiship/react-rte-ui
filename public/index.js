import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar, Button, ButtonGroup } from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="wsui-rte-icons p-3 app-container"
        url="https://github.com/afeiship/react-rte-ui">
        <Toolbar className="is-item">
          <ButtonGroup>
            <Button tooltip="左对齐">
              <i className="wsui-icon-align_left" />
            </Button>
            <Button tooltip="居中" active>
              <i className="wsui-icon-align_center" />
            </Button>
            <Button tooltip="右对齐">
              <i className="wsui-icon-align_right" />
            </Button>
            <Button tooltip="右对齐">
              <i className="wsui-icon-align_justify" />
            </Button>
          </ButtonGroup>
        </Toolbar>

        <Toolbar className="is-item">
          <ButtonGroup>
            <Button tooltip="标识符">标</Button>
            <Button tooltip="分隔">隔</Button>
            <Button tooltip="插空">空</Button>
            <Button tooltip="数学公式">f(x)</Button>
            <Button tooltip="插入图片">
              <i className="wsui-icon-image" />
            </Button>
          </ButtonGroup>
        </Toolbar>

        <Toolbar>
          <ButtonGroup>
            <Button tooltip="加粗">
              <i className="wsui-icon-bold" />
            </Button>
            <Button tooltip="倾斜">
              <i className="wsui-icon-italic" />
            </Button>
            <Button tooltip="删除线">
              <i className="wsui-icon-strikethrough" />
            </Button>
            <Button tooltip="下滑线">
              <i className="wsui-icon-underline" />
            </Button>
          </ButtonGroup>
        </Toolbar>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
