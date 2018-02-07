console.log("Is running");

// JSX - Javascript XML
//var template = <p>This is JSX</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX"
  );
var appRoot = document.getElementById("app");

// .render(jsx, dom)
ReactDOM.render(template, appRoot);