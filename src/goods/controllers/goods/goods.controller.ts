import { Controller,
  Get,
  Body,
  Param,
  UseInterceptors 
  } from '@nestjs/common';
import { Crud,
  CrudController,
  Override,
  CrudRequest,
  ParsedRequest,
  CrudRequestInterceptor,
  ParsedBody
  } from '@nestjsx/crud';
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
export class GoodsController implements CrudController<Good> {
  constructor(public service: GoodsService){}
  
  @Get('fields')
    index(): object {
      const good = new Good();
	  good.id = '';
	  good.title = '';
	  good.description = '';
	  good.provider = '';
	  good.manufacturer = '';
	  good.category = '';
	  good.manufacture_date = '';
	  good.country = '';
	  good.created_at = '';
	  good.updated_at = '';
	  console.log(good.toJSON());
	  return good.toJSON();	  
    } 

	
}


