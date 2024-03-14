"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersResolver = void 0;
const user_service_1 = require("../services/user.service");
exports.usersResolver = {
    Query: {
        users(_, args, context, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield (0, user_service_1.getUsers)({ info });
            });
        },
        user(_, args, context, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield (0, user_service_1.getUser)({ id: args.id, info });
            });
        }
    },
    Mutation: {
        createUser(_1, _a) {
            return __awaiter(this, arguments, void 0, function* (_, { args }) {
                return yield (0, user_service_1.createUser)({ email: args.email, username: args.username });
            });
        },
        updateUser() {
            return __awaiter(this, void 0, void 0, function* () { });
        },
        deleteUser() {
            return __awaiter(this, void 0, void 0, function* () { });
        }
    }
};
