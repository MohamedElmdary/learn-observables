export const map = function (cb = v => v) {
    return (val) => cb(val)
};

export const filter = function (cb = v => v) {
    return (val) => {
        if (cb(val))
            return val;
    }
}