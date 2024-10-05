import { Injectable } from "@angular/core";

@Injectable()
export class UsersApiService {
    public printLog():void{
        console.log('Umalat-service');
    }
}