// const { h, Component, render } = preact; /** @jsx h */
//
//
// /** Instantiates a pubsub and exposes it via context */
// class PubSub {
//     events = mitt();
//     getChildContext() {
//         return { events: this.events };
//     }
//     render(props) {
//         return props.children;
//     }
// }
//
// /** Passes pubsub's emit() function as a prop (avoids direct context access) */
// const connect = Component => (props, context) => (
//     <Component emit={context.events.emit} {...props} />
// );
//
// /** Emits a pubsub event when rendered */
// const Emit = connect( ({ type, emit, ...props }) => { emit(type, props) });
//
// /** Binds listener props to pubsub */
// class Observe extends Component {
//     componentDidMount() {
//         this.bind('on', this.props);
//     }
//     componentDidUpdate(oldProps) {
//         this.bind('off', oldProps);
//         this.bind('on', this.props);
//     }
//     componentWillUnmount() {
//         this.bind('off', this.props);
//     }
//     bind(method, events) {
//         console.log(method, events)
//         for (let i in events) if (typeof events[i]==='function') {
//             this.context.events[method](i.replace(/^on/,'').toLowerCase(), events[i]);
//         }
//     }
// }
//
//
//
//
//
//
// /** DEMO: two components talking to one another. */
// const Demo = () => (
//     <div class="demo">
//         <Header />
//         <Body />
//     </div>
// );
//
// const Header = connect(class Header extends Component {
//     words = 'the quick brown fox jumped over the lazy dog'.split(' ');
//     addFoo = () => {
//         this.props.emit('foo', {
//             time: new Date(),
//             text: this.words.slice().sort(()=>Math.random()-.5).join(' ')
//         });
//     };
//     render() {
//         return (
//             <header>
//                 <button onClick={this.addFoo}>Add Foo</button>
//                 <h1>
//                     <a href="//git.io/preact" target="_blank">Preact</a>
//                     {' + '}
//                     <a href="//git.io/mitt" target="_blank">Mitt</a>
//                     {' Demo'}
//                 </h1>
//             </header>
//         );
//     }
// });
//
// class Body extends Component {
//     state = {
//         foos: []		// a trail of "foo" event objects
//     };
//     handleFoo = e => {
//         // preppend the event to our list of foos
//         this.setState({ foos: [e].concat(this.state.foos) });
//     };
//     render({ }, { foos }) {
//         return (
//             <ul>
//                 <Observe onFoo={this.handleFoo} />
//                 { foos.map( foo => (
//                     <li>
//                         <time>{foo.time.toLocaleTimeString()}</time>
//                         <p>{foo.text}</p>
//                     </li>
//                 )) }
//             </ul>
//         );
//     }
// }
//
//
// render((
//     <PubSub>
//         <Demo />
//     </PubSub>
// ), document.body);
