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

const sunburstData = convertToSunburstData(inputData);

export default sunburstData;
