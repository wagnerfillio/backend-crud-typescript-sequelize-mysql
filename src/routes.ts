import express  from "express";
import userController from './controllers/user.controller';

const router = express.Router();

router.post('/users', userController.create);
router.get('/users', userController.findAll);
router.get('/users/:userId', userController.findOne);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.destroy);

export { router };