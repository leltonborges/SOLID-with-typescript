import { Router } from "express";
import { createuserController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (req, resp) => {
    return createuserController.handle(req, resp);
})

export { router }