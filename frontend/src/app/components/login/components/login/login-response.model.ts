import { UserModel } from "./models/user.model";

export class LoginResponseModel{
    token: string = "";
    user: UserModel = new UserModel();
}
