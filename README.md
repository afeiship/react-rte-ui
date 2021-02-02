# react-rte-ui
> UI toolkit for react rte.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-rte-ui
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@jswork/react-rte-ui/dist/style.css";

  // or use sass
  @import "~@jswork/react-rte-ui/dist/style.scss";
  @import "~@jswork/wsui-rte-icons";
  @import "~balloon-css";

  // customize your styles:
  $react-rte-ui-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Toolbar, Button, ButtonGroup } from '@jswork/react-rte-ui';
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

  ```

## documentation
- https://afeiship.github.io/react-rte-ui/


## license
Code released under [the MIT license](https://github.com/afeiship/react-rte-ui/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-rte-ui
[version-url]: https://npmjs.org/package/@jswork/react-rte-ui

[license-image]: https://img.shields.io/npm/l/@jswork/react-rte-ui
[license-url]: https://github.com/afeiship/react-rte-ui/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-rte-ui
[size-url]: https://github.com/afeiship/react-rte-ui/blob/master/dist/react-rte-ui.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-rte-ui
[download-url]: https://www.npmjs.com/package/@jswork/react-rte-ui
