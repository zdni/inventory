import express from "express";

// controllers
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import XlsxController from '../controllers/XlsxController';
// libraries
import upload from '../libraries/helpers/fileHelper';
// middlewares
import auth from '../middlewares/auth';

const router = express.Router();


// ############################ routers ############################
// auth
router.post('auth/login', AuthController.login);
router.post('auth/refresh-token', AuthController.refreshToken);
// users
router.get('/user', auth(), UserController.userFromToken);
router.get('/users', auth(), UserController.index);
router.get('/users/:id', auth(), UserController.show);
router.post('/users', auth(), UserController.store);
router.put('/users/:id', auth(), UserController.update);
router.put('/users/reset-password/:id', auth(), UserController.resetPassword);
router.put('/users/change-password/:id', auth(), UserController.changePassword);
router.put('/users/change-profile-picture/:id', auth(), upload.single('image'), UserController.changeProfilePicture);
router.delete('/users/:id', auth(), UserController.destroy);
// import xlsx
router.post('/import/xlsx', auth(), upload.single('file'), XlsxController.import);


// server
router.get('/', function(req, res) {
  try {
    return res.status(200).json({ status: true, message: 'CONNECTED' });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'NOT CONNECTED' });
  }
});

export default router;