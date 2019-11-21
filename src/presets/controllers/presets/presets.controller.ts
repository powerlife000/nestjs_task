import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
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
import { Preset } from '../../entities/preset.entity';
import { PresetsService } from '../../services/presets/presets.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Good } from '../../../goods/entities/good.entity';
import { GoodsService } from '../../../goods/services/goods/goods.service';
import request = require('request-promise');
import {getConnection} from "typeorm";

var options = {
	method: '',
    uri: 'http://localhost:3000/goods',
    qs: {},
	body: {},
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

/*@Crud({
  model: {
    type: Preset,
  },
})*/
@ApiUseTags('presets')
@Controller('presets')
export class PresetsController implements CrudController<Preset>{
  constructor(public service: PresetsService){} 
  
  @Get(':id/getPreset')
    async index(@Param('id') id): Promise<any> {
		
		/*const getData = new Promise<string>((resolve, reject) => {
			var data = this.service.findOne(id);
			resolve(data);
		});
		getData.then(value => {
		  var temp = JSON.parse(value);
		  console.log(temp);
		  return request(temp)
			.then(function (repos) {
				// Succeeded...
				return repos;
			})
			.catch(function (err) {
				// Failed...
			});
		});*/

		var data = await this.service.findOne(id);
		var temp = JSON.parse(data.options);
		return request(temp)
			.then(function (repos) {
				// Succeeded...
				return repos;
			})
			.catch(function (err) {
				// Failed...
			});
    }
	
	@Get('allPresets')
    index1(): Promise<Preset[]> {
      return this.service.find();	  
    }
	
	@UseInterceptors(CrudRequestInterceptor)
	@Get()
	async get(@ParsedRequest() req: CrudRequest, @Param() param, @Body() body): Promise<any> {
		
	  var getOpt = JSON.parse(JSON.stringify(options));
	  var req1 = JSON.parse(JSON.stringify(req));
	  getOpt.method = 'GET';
	  if (req.parsed.fields[0] != null) {
		 let temp:string = '';
		 for (let i=0; i<req.parsed.fields.length; i++){
			 if (i ==0) {
				temp += req.parsed.fields[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.fields[i];
			 }
			 
		 }
		 getOpt.qs.fields = temp; 
	  }
	  if (req.parsed.paramsFilter[0] != null) {
		 let temp:string = '';
		 for (let i=0; i<req.parsed.paramsFilter.length; i++){
			 if (i ==0) {
				temp += req.parsed.paramsFilter[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.paramsFilter[i];
			 }
		 }
		 getOpt.qs.paramsFilter = temp; 
	  }
	  if (req.parsed.filter[0] != null) {
		 let temp:string = '';
		 for (let i=0; i<req.parsed.filter.length; i++){
			 if (i ==0) {
				temp += req.parsed.filter[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.filter[i];
			 }
		 }
		 getOpt.qs.filter = temp; 
	  }
	  if (req.parsed.or[0] != null) {
		 let temp:string = '';
		 for (let i=0; i<req.parsed.or.length; i++){
			 if (i ==0) {
				temp += req.parsed.or[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.or[i];
			 }
		 }
		 getOpt.qs.or = temp; 
	  }
	  if (req.parsed.join[0] != null) {
		  let temp:string = '';
		 for (let i=0; i<req.parsed.join.length; i++){
			 if (i ==0) {
				temp += req.parsed.join[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.join[i];
			 }
		 }
		 getOpt.qs.join = temp; 
	  }
	  if (req.parsed.sort[0] != null) {
		  let temp:string = '';
		 for (let i=0; i<req.parsed.sort.length; i++){
			 if (i ==0) {
				temp += req.parsed.sort[i]; 
			 }
			 else {
				 temp = temp +','+ req.parsed.sort[i];
			 }
		 }
		 getOpt.qs.sort = temp; 
	  }
	  if (req.parsed.limit != undefined) {
		 getOpt.qs.limit = req.parsed.limit; 
	  }
	  if (req.parsed.offset != undefined) {
		 getOpt.qs.offset = req.parsed.offset; 
	  }
	  if (req.parsed.page != undefined) {
		 getOpt.qs.page = req.parsed.page; 
	  }
	  if (req.parsed.cache != undefined) {
		 getOpt.qs.cache = req.parsed.cache; 
	  }
	  
	  /*if (req.options.query[0] != null) {
		  let temp:string = '';
		 for (let i=0; i<req.options.query.length; i++){
			 if (i ==0) {
				temp += req.options.query[i]; 
			 }
			 else {
				 temp = temp +','+ req.options.query[i];
			 }
		 }
		 getOpt.qs.options.query = temp; 
	  }*/
	  
	  /*console.log(getOpt);
	  console.log(req.options.routes.getManyBase[0] == null)*/
	  
	  /*const preset = new Preset();
	  preset.id = '';
	  preset.options = getOpt;*/
	  
	  return request(getOpt)
		.then(function (repos) {
			// Succeeded...
			save(getOpt);
			return repos;
		})
		.catch(function (err) {
			// Failed...
		});
	}
	
	@UseInterceptors(CrudRequestInterceptor)
	@Post()
	async post(@ParsedRequest() req: CrudRequest,@ParsedBody() body1, @Param() param, @Body() body) {
	  // some awesome feature handling
	  console.log(req);
	  console.log(body1);
	  console.log(param);
	  console.log(body);
	  return "{111}";
	}
	
	@UseInterceptors(CrudRequestInterceptor)
	@Put()
	async update(@ParsedRequest() req: CrudRequest,@ParsedBody() body1, @Param() param, @Body() body) {
	  // some awesome feature handling
	  console.log(req);
	  return "{111}";
	}
	
	@UseInterceptors(CrudRequestInterceptor)
	@Delete()
	async delete(@ParsedRequest() req: CrudRequest, @Param() param, @Body() body) {
	  // some awesome feature handling
	  console.log(req);
	  return "{111}";
	}
  
}

async function save (data) {
	data = JSON.stringify(data);
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into('preset')
    .values([
        { options: data } 
     ])
    .execute();
}

