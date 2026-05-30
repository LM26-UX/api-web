"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const temas_module_1 = require("./temas/temas.module");
const tema_entity_1 = require("./temas/tema.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://postgres.utimoqajsygspumiemmu:YdOk6Gmhe0NmxLRr@aws-1-us-east-1.pooler.supabase.com:6543/postgres',
                entities: [tema_entity_1.Tema],
                synchronize: false,
                ssl: { rejectUnauthorized: false },
            }),
            temas_module_1.TemasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map