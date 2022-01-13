import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUserCase";

export class CreateUserController {
    constructor(
        private createUserCase: CreateUserUseCase,
    ) {
        
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        
       try{
           await this.createUserCase.execute({
               name, email, password
           })
           return response.status(201).json();
       }catch(err){
           return response.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }


    }
}