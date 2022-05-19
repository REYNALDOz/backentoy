/* import { NextFunction, Request, Response } from "express";
import { getOneToyByIdService } from '../services/getOneToyByIdService';
import { ToyModel } from "../entity/models/ToyModel";
import { User } from '../../User/types/User';

export const postToyReviewController = async(req:Request, res:Response, next:NextFunction) => {
    const {rating, comment}=req.body;
    const toy = await getOneToyByIdService(req.params.id);

    if(toy){
        const alreadyReviewed = ToyModel.findById(
          (r) => r.user.toString() === req.User._id.toString()
        );

    }
}; */
