import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    findAll(age: Number): {
        age: Number;
    }[];
    findOne(id: String): {
        id: String;
    };
    create(createProfileDto: CreateProfileDto): {
        name: String;
        description: String;
    };
    update(id: String, updateProfileDto: UpdateProfileDto): {
        name: String;
        description: String;
        id: String;
    };
    remove(id: String): void;
}
