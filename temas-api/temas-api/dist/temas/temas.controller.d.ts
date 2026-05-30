import { TemasService } from './temas.service';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
export declare class TemasController {
    private readonly temasService;
    constructor(temasService: TemasService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(dto: CreateTemaDto): Promise<any>;
    update(id: number, dto: UpdateTemaDto): Promise<any>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
