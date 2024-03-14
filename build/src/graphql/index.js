"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const user_resolver_1 = require("./resolvers/user.resolver");
const userTypes = (0, fs_1.readFileSync)(path_1.default.join(__dirname, "./typeDefs/user.graphql"), {
    encoding: "utf-8"
});
const postTypes = (0, fs_1.readFileSync)(path_1.default.join(__dirname, "./typeDefs/post.graphql"), {
    encoding: "utf-8"
});
exports.typeDefs = `
    ${userTypes},
    ${postTypes}
`;
exports.resolvers = {
    Query: Object.assign({}, user_resolver_1.usersResolver.Query),
    Mutation: Object.assign({}, user_resolver_1.usersResolver.Mutation)
};
