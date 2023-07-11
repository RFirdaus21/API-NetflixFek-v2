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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserService {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return user_1.default.findAll();
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_1.default.create(userData);
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_1.default.findByPk(userId);
        });
    }
    login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ where: { username: userData.username, password: userData.password } });
            if (!user) {
                return null;
            }
            return user;
        });
    }
    updateUser(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findByPk(userId);
            if (!user)
                throw new Error('User not found');
            return user.update(userData);
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findByPk(userId);
            if (!user)
                throw new Error('User not found');
            return user.destroy();
        });
    }
}
exports.default = UserService;
