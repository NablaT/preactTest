import {h, render} from 'preact';

import Counter from './components/Counter';

render((
    <div id="foo">
        <Counter/>
        <button onClick={e => alert("hi!")}>Click Me</button>
    </div>
), document.body);