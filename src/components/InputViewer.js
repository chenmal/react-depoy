import React, { useState } from 'react';
import Input from './input';
import Button from './Bottun';
function InputViewer() {
const [text, setText] = useState('');
const [viewText, setViewText] = useState('');
function changeHandler(e) {
setText(e.target.value);
};
function clickHandler(e) {
setViewText(text);
};
return (
<div>
<span>{viewText}</span>
<Input onChange={changeHandler} type="text" />
<Button onClick={clickHandler}>Click me</Button>
</div>
);
}
export default InputViewer;