// importing react library
import React from "react";
//importing styles for this component
import "./Hello.css";

// const Hello = (props) => {
//   return (
//     <div className="f1 tc">
//       <h1>Hello World</h1>
//       <p>{props.greeting}</p>
//     </div>
//   );
// };

class Hello extends React.Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

//exporting the class hello
export default Hello;
