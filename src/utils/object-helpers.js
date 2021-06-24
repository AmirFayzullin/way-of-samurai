export const changeObjectInArray = (items, objPropName, propValue, newObj) =>
    items.map(item => {
        if (item[objPropName] !== propValue) return item;
        return {...item, ...newObj}
    });
