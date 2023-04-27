import {HttpException, HttpStatus} from "@nestjs/common";
import {response} from "express";

export class ValidationException extends HttpException {
    messages;

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        console.log(response)
        this.messages = response;
    }
}