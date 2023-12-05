const inputData = JSON.parse(localStorage.getItem("formEntries"));

const convertToSunburstData = (data) => {
  const sunburstData = {
    name: "root",
    children: [],
  };

  data.forEach((entry) => {
    // Check if the entry is an expense
    if (entry.group === "Expense") {
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

      if (entry.category) {
        let currentUserButton = currentGroup.children.find(
          (userButton) => userButton.name === entry.category
        );

        if (!currentUserButton) {
          currentUserButton = {
            name: entry.category,
            value: 0,
            children: [],
          };
          currentGroup.children.push(currentUserButton);
        }

        if (entry.subcategory) {
          let currentSubgroupButton = currentUserButton.children.find(
            (subgroupButton) => subgroupButton.name === entry.subcategory
          );

          if (!currentSubgroupButton) {
            currentSubgroupButton = {
              name: entry.subcategory,
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
    amount: "0", // Set your default amount
    date: new Date().toLocaleDateString(),
    group: "Expense", // Set your default group
    category: "Example Category", // Set your default button
    subcategory: "Example Subcategory", // Set your default subgroup
  };

  sunburstData = convertToSunburstData([initialEntry]);

  // Update localStorage with the initial value
  localStorage.setItem("formEntries", JSON.stringify([initialEntry]));
} else {
  // Use the existing logic to convert inputData to sunburstData
  sunburstData = convertToSunburstData(inputData);
}

export default sunburstData;
