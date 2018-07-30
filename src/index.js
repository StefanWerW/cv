import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Resume from './resume/index';
import 'semantic-ui-css/semantic.min.css';

const myJSONResume = require("./resume.json")

ReactDOM.render(
  <Resume jsonResume={myJSONResume} theme="default" />,
  document.getElementById("root")
);
registerServiceWorker();
