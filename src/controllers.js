import express from 'express';
import changeUserBalanceService from './services.js';

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const changeUserBalanceController = async (req, res, _next) => {
    try {
        const { userId, amount, operation } = req.body;

        if (!userId) throw new Error('UserId is required');
        if (amount < 0) throw new Error('Balance value is invalid');
        const operationValid = operation === '-' || operation === '+';
        if (!operationValid) throw new Error('Operation is incorrect');

        const response = await changeUserBalanceService(userId, amount, operation);

        return res.status(200).send({ user: response });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

export default changeUserBalanceController;

