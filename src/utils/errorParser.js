const flatErrorMsgRegExp = /\(([A-Za-z]+)\)/;
const nestedErrorMsgRegExp = /\(([A-Za-z]+)(->)([A-Za-z]+)\)/;

export const parseError = (message) => {
    const isFlat = flatErrorMsgRegExp.test(message);
    const isNested = nestedErrorMsgRegExp.test(message);

    if (isFlat) {
        const place = message.match(flatErrorMsgRegExp);
        return {
            [place[1]]: message,
        }
    } else if (isNested) {
        const place = message.match(nestedErrorMsgRegExp);
        return {
            [place[1]]: {
                [place[3]]: message
            }
        }
    } else {
        return {
            _error: message
        }
    }
};

window.parseError = parseError;