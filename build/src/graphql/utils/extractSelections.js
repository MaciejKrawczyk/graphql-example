"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSelection = void 0;
const getSelections = (info) => {
    var _a;
    return ((_a = info.fieldNodes[0].selectionSet) === null || _a === void 0 ? void 0 : _a.selections) || null;
};
const extractSelection = (info) => {
    const selections = getSelections(info);
    if (!selections)
        return [];
    return selections.reduce((initialValue, selection) => {
        if (selection.kind === "Field") {
            return [...initialValue, selection.name.value];
        }
        return initialValue;
    }, []);
};
exports.extractSelection = extractSelection;
