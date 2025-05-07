function Message() {
    const name = 'Jesse';
    if (name)
        return <h1>Hello World {name}</h1>;    // JSX: Js xml
    return <h1>Hell world</h1>;
}

export default Message;