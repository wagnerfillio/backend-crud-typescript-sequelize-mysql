import { Request, Response } from "express";
import { userModel } from "../database/models/user.model";

class userController {
    async findAll(req: Request, res: Response) {
        const user = await userModel.findAll();

        return user.length
        ? res.status(200).json(user)
        : res.status(204).send();
    }

    async findOne(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await userModel.findOne({
            where: {
                id: userId
            }
        });

        return user
        ? res.status(200).json(user)
        : res.status(204).send();
    }

    async create(req: Request, res: Response) {
        const { email, nome } = req.body;
        const user = await userModel.create({
            email,
            nome
        });        
        return res.status(201).json(user);        
    }

    async update(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await userModel.update(req.body, {
            where: {
                id: userId
            }
        });
        return res.status(204).send();
    }

    async destroy(req: Request, res: Response) {
        const { userId } = req.params;
        await userModel.destroy({
            where: {
                id: userId
            }
        });
        return res.status(204).send();
    }
}

export default new userController();