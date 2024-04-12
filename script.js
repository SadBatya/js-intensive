import { setchangedataCallBack } from './data/dataCounter.js';
import { renderCounter } from './components/renderCounter.js';

renderCounter();
setchangedataCallBack(renderCounter)
