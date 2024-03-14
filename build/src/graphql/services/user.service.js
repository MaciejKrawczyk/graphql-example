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
exports.createUser = exports.getUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const extractSelections_1 = require("../utils/extractSelections");
const prisma = new client_1.PrismaClient();
const getUsers = (_a) => __awaiter(void 0, [_a], void 0, function* ({ info }) {
    const extractedSelections = (0, extractSelections_1.extractSelection)(info);
    const postsIncluded = extractedSelections.includes("posts");
    if (postsIncluded) {
        return yield prisma.user.findMany({ include: { posts: true } });
    }
    return yield prisma.user.findMany();
});
exports.getUsers = getUsers;
const getUser = (_b) => __awaiter(void 0, [_b], void 0, function* ({ id, info }) {
    const extractedSelections = (0, extractSelections_1.extractSelection)(info);
    const postsIncluded = extractedSelections.includes("posts");
    if (postsIncluded) {
        return yield prisma.user.findUnique({ where: { id }, include: { posts: true } });
    }
    return yield prisma.user.findUnique({ where: { id } });
});
exports.getUser = getUser;
const createUser = (_c) => __awaiter(void 0, [_c], void 0, function* ({ email, username }) {
    const createdUser = yield prisma.user.create({
        data: {
            email,
            username
        }
    });
    return createdUser;
});
exports.createUser = createUser;
