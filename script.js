"use strict";
function mk(type, props, children, str = "") {
  const el = document.createElement(type);

  const text = document.createTextNode(str);
  if (props) Object.assign(el, props);

  if (children) el.append(...children);

  if (text) el.appendChild(text);

  return el;
}

function form() {
  return mk("div", { className: "form" }, [
    mk("h1", null, null, "Sign In"),
    mk("p", {className: "sub-title"}, null, "Please Login to use the platform"),
    mk('input', {className: 'input', placeholder: 'Enter Email'}),
    mk('input', {className: 'input', placeholder: 'Enter Password'}),
    mk('div', {className: 'input-set'}, [mk("p", null, null, "Remember me"), mk("p", null, null, "I forgot my password!")]),
    mk('a', {className: 'btn'}, null, 'sign in'),
    mk("p", null, null, 'Don\'t have an account? Create an account.'),
    
  ]);
}

document.body.append(form());
