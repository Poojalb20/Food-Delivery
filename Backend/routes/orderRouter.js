const express=require('express');
const orderRouter=express.Router();
const {placeOrder,userOrders,verifyOrder,listOrders,updateState}=require('../controllers/orderContoller');
const authMiddleware=require('../middleware/auth');

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.get('/list',listOrders);
orderRouter.post('/userorders',authMiddleware,userOrders);
orderRouter.post('/status',updateState);
module.exports = orderRouter;