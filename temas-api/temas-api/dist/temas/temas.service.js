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
exports.TemasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TemasService = class TemasService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    findAll() {
        return this.dataSource.query(`SELECT id, nombre_tema FROM public.tema`);
    }
    async findOne(id) {
        const result = await this.dataSource.query(`SELECT id, nombre_tema FROM public.tema WHERE id = $1`, [id]);
        if (!result.length)
            throw new common_1.NotFoundException(`Tema con id ${id} no encontrado`);
        return result[0];
    }
    async create(dto) {
        const result = await this.dataSource.query(`INSERT INTO public.tema (nombre_tema) VALUES ($1) RETURNING *`, [dto.tema]);
        return result[0];
    }
    async update(id, dto) {
        await this.findOne(id);
        const result = await this.dataSource.query(`UPDATE public.tema SET nombre_tema = $1 WHERE id = $2 RETURNING *`, [dto.tema, id]);
        return result[0];
    }
    async remove(id) {
        await this.findOne(id);
        await this.dataSource.query(`DELETE FROM public.tema WHERE id = $1`, [id]);
        return { message: `Tema con id ${id} eliminado correctamente` };
    }
};
exports.TemasService = TemasService;
exports.TemasService = TemasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], TemasService);
//# sourceMappingURL=temas.service.js.map