function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true });


class Editor extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",


















































    event => {
      this.setState({
        input: event.target.value });

    });this.state = { input: `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  ` };}render() {return React.createElement("div", { className: "d-flex", style: { border: "3px solid brown" } }, React.createElement("textarea", { onChange: this.handleChange, value: this.state.input, className: "w-50 border border-secondary mr-2", id: "editor" }, " "), React.createElement(Previewer, { input: this.state.input }));}}; // let Previewer = (props) => {
//   console.log(props);
//   return (
//     <div id="preview" dangerouslySetInnerHTML={props.toMarkDown()}>
//    {props.input}
//     </div>
//   );
// }
class Previewer extends React.Component {constructor(_props) {super(_props);_defineProperty(this, "toMarkDown", props => {let md = marked(props.input);return { __html: md };});}render() {// console.log(this.props);
    return React.createElement("div", { id: "preview", className: "w-50", dangerouslySetInnerHTML: this.toMarkDown(this.props) });}}ReactDOM.render(React.createElement(Editor, null), document.getElementById("root"));