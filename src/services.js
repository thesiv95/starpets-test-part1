import UserModel from './models/User.model.js';

const service = async (userId, amount = 2, operation = '-') => {
    const currentUser = await UserModel.findByPk(userId);
    const currentBalance = currentUser.balance;
    const newBalance = operation === '-' ? currentBalance - amount : currentBalance + amount;

    if (operation === '-' && currentBalance < amount) {
        throw new Error('Insufficient funds');
    }

    await UserModel.update({ balance: newBalance }, { where: { userId } });

    return {
        userId,
        balance: newBalance
    }

};

export default service;