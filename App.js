// ------- Using JavaScript
// const heading = document.createElement('h1');
// heading.innerHTML = 'hello from javascript';
// root.appendChild(heading);

// // ------- Using React
// const heading = React.createElement('h1', { className: 'heading', id: 'myFirstReact' }, 'hello from React'); // empty Object using like that  use for - class, id, styling etc.

// console.log(heading) // is an Object.

// const root = ReactDOM.createRoot(document.getElementById('root')); // helps you a selecting a root.

// root.render(heading);
// // render Method taks a heading (Object) and convert into a 'h1' tag and put it up into DOM.

/**
 *  <div id:'parent'>
 *     <div className:'child'>
 *        <h1>I'm a h1 tag!</h1>
 *     </div>
 *  </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { className: "child" }, [
        React.createElement("h1", {}, "I'm a h1 tag!"),
        React.createElement("h2", {}, "I'm a h2 tag!"),
    ]),
    React.createElement("div", { className: "child" }, [
        React.createElement("h1", {}, "I'm a h1 tag!"),
        React.createElement("h2", {}, "I'm a h2 tag!"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
