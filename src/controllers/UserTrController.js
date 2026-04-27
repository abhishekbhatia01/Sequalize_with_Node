const { sequelize } = require("../config/dbConnect");
const { userTrModel } = require("../models/userTrModel");
const { contactModel } = require("../models/contactModel");

const unmanagedTransactionExample = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const user = await userTrModel.create(
      {
        name: "Unmanaged Transaction Example",
      },
      { transaction: transaction },
    );

    const contact = await contactModel.create(
      {
        phone: "1234567890",
        userId: user.id,
      },
      { transaction: transaction },
    );

    await transaction.commit();
    res.status(200).json({ message: "Transaction committed successfully" });
  } catch (error) {
    await transaction.rollback();
    console.error("Transaction Error:", error);
  }
};

const managedTransactionExample = async (req, res) => {
  try {
    let result;
    await sequelize.transaction(async (t) => {
      result = await userTrModel.create(
        {
          name: "Managed Transaction Example",
        },
        { transaction: t },
      );

      await contactModel.create(
        {
          phone: "1234567890",
          userId: result.id,
        },
        { transaction: t },
      );
    });

    res.status(200).json({ message: "Transaction committed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Transaction failed", error: error.message });
  }
};

module.exports = { unmanagedTransactionExample, managedTransactionExample };
