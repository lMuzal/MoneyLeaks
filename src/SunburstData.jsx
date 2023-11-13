const inputData = JSON.parse(localStorage.getItem("formEntries"));

const convertToSunburstData = (data) => {
  const sunburstData = {
    name: "root",
    children: [],
  };

  data.forEach((entry) => {
    let currentGroup = sunburstData.children.find(
      (group) => group.name === entry.group
    );

    if (!currentGroup) {
      currentGroup = {
        name: entry.group,
        value: 0,
        children: [],
      };
      sunburstData.children.push(currentGroup);
    }

    if (entry.userButtons) {
      let currentUserButton = currentGroup.children.find(
        (userButton) => userButton.name === entry.userButtons
      );

      if (!currentUserButton) {
        currentUserButton = {
          name: entry.userButtons,
          value: 0,
          children: [],
        };
        currentGroup.children.push(currentUserButton);
      }

      if (entry.subgroupButtons) {
        let currentSubgroupButton = currentUserButton.children.find(
          (subgroupButton) => subgroupButton.name === entry.subgroupButtons
        );

        if (!currentSubgroupButton) {
          currentSubgroupButton = {
            name: entry.subgroupButtons,
            value: parseInt(entry.amount),
          };
          currentUserButton.children.push(currentSubgroupButton);
        } else {
          currentSubgroupButton.value += parseInt(entry.amount);
        }
      } else {
        currentUserButton.value += parseInt(entry.amount);
      }
    } else {
      currentGroup.value += parseInt(entry.amount);
    }
  });

  console.log(sunburstData);

  return sunburstData;
};

let sunburstData;

// Check if localStorage is empty or formEntries is empty
if (!inputData || inputData.length === 0) {
  // Set an initial default value for formEntries
  const initialEntry = {
    amount: "100", // Set your default amount
    date: new Date().toLocaleDateString(),
    group: "Expense", // Set your default group
    userButtons: "DefaultButton", // Set your default button
    subgroupButtons: "DefaultSubgroup", // Set your default subgroup
  };

  sunburstData = convertToSunburstData([initialEntry]);

  // Update localStorage with the initial value
  localStorage.setItem("formEntries", JSON.stringify([initialEntry]));
} else {
  // Use the existing logic to convert inputData to sunburstData
  sunburstData = convertToSunburstData(inputData);
}

export default sunburstData;
