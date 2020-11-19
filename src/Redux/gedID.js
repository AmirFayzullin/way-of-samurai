const genID = () => {
    let rand = Math.random() * Math.pow(10, 10);
    return rand - rand % 1;
};

export default genID;