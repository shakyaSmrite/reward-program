import faker from "faker";

var rewards = 0;
function calculateRewards(data) {
  if (data.amount > 100) {
    rewards = (data.amount - 100) * 2 + 100 * 1;
  } else if (data.amount <= 100 && data.amount >= 50) {
    rewards = (data.amount - 50) * 1;
  } else {
    rewards = 0;
  }
  return rewards;
}

const createdRecords = [];
// Basic Assumptions
// Randomly assigning 100 transcation to months Jan, Feb and March
// Total transcation Amount -- 0 < Amount < 500
for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 3 + 1), "dfd");
  createdRecords.push({
    month: ["Jan", "Feb", "March", "April", "May"][
      Math.floor(Math.random() * 3 + 1) - 1
    ],
    amount: Math.floor(Math.random() * 500 + 1),
    transcationType: "purchase",
    transcationDescription: faker.finance.transactionDescription(),
  });
}

const record = createdRecords.map((data) => {
  return { ...data, rewards: calculateRewards(data) };
});

export const totalReward = () => {
  let total = 0;
  for (let i = 0; i < record.length; i++) {
    total += record[i].rewards;
  }
  return total;
};

export default record;
