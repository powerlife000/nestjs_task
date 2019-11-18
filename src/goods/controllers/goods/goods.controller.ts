import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Good } from '../../entities/good.entity';
import { GoodsService } from '../../services/goods/goods.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Good,
  },
})
@ApiUseTags('goods')
@Controller('goods')
export class GoodsController implements CrudController<Good>{
  constructor(public service: GoodsService){}
}
