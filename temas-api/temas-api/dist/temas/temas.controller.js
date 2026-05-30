"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemasController = void 0;
const common_1 = require("@nestjs/common");
const temas_service_1 = require("./temas.service");
const create_tema_dto_1 = require("./dto/create-tema.dto");
const update_tema_dto_1 = require("./dto/update-tema.dto");
let TemasController = class TemasController {
    temasService;
    constructor(temasService) {
        this.temasService = temasService;
    }
    findAll() {
        return this.temasService.findAll();
    }
    findOne(id) {
        return this.temasService.findOne(id);
    }
    create(dto) {
        return this.temasService.create(dto);
    }
    update(id, dto) {
        return this.temasService.update(id, dto);
    }
    remove(id) {
        return this.temasService.remove(id);
    }
};
exports.TemasController = TemasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TemasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TemasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tema_dto_1.CreateTemaDto]),
    __metadata("design:returntype", void 0)
], TemasController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tema_dto_1.UpdateTemaDto]),
    __metadata("design:returntype", void 0)
], TemasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TemasController.prototype, "remove", null);
exports.TemasController = TemasController = __decorate([
    (0, common_1.Controller)('temas'),
    __metadata("design:paramtypes", [temas_service_1.TemasService])
], TemasController);
//# sourceMappingURL=temas.controller.js.map