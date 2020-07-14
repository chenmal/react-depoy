import React from 'react';
function Button(props) {
const clickHandler = props.onClick;
return (
<button onClick={clickHandler}>Click</button>
);
}
export default Button;