import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
    @Get()
    findAll(@Query('age') age: Number) {
        return [{ age }];
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return { id }
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return {
            'name': createProfileDto.name,
            'description': createProfileDto.description
        }
    }

    @Put(':id')
    update(@Param('id') id: String, @Body() updateProfileDto: UpdateProfileDto) {
        return { id, ...updateProfileDto }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: String) {

    }
}
