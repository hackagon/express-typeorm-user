import * as express from 'express';
import * as userService from "../services/user"


const router = express.Router();

router.get("/users", userService.getUsers)


export default router;
