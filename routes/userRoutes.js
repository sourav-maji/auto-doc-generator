import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  healthCheck
} from '../controllers/userController.js';

const router = express.Router();

router.get('/health', healthCheck);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;
