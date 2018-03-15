import {h, Component} from 'preact';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
        this.timer = null;
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.play();
    }

    render(props, {count}) {
        return <div class="demo">
            Counter: {count}
            {this.renderButton()}
        </div>
    }

    renderButton() {
        if (this.timer === null) {
            return <button onClick={this.play}>Play</button>;
        }
        return <button onClick={this.pause}>Pause</button>;
    }

    pause() {
        window.clearInterval(this.timer);
        this.timer = null;
        this.setState({});
    }

    play() {
        this.timer = setInterval(() => this.setState({count: this.state.count + 1}), 1000);
        this.setState({});
    }
}