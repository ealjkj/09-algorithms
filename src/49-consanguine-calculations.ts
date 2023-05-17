const possibleAlleles: { [key: string]: string[] } = {
  A: ["A", "O"],
  B: ["B", "O"],
  O: ["O"],
  AB: ["A", "B"],
};

const combinations: { [key: string]: string } = {
  AA: "A",
  AB: "AB",
  AO: "A",
  BB: "B",
  BO: "B",
  OO: "O",
  BA: "AB",
  OA: "A",
  OB: "B",
};

export default function consanguineCalculations(testCase: string): string {
  const [parent1, parent2, child] = testCase.split(" ");
  console.log("testCase and child", testCase, child);

  if (child === "?") {
    const possibileChildren = firstCaseArray(parent1, parent2);
    return `${parent1} ${parent2} ${arrayToString(possibileChildren)}`;
  }

  if (parent2 === "?") {
    const possibleParents = secondCaseArray(parent1, child);
    return `${parent1} ${arrayToString(possibleParents)} ${child}`;
  }

  return testCase;
}

function firstCaseArray(parent1: string, parent2: string) {
  // Parent 1
  const parent1Blood = parent1.substring(0, parent1.length - 1);
  const parent1Rh = parent1.at(-1);

  // Parent 2
  const parent2Blood = parent2.substring(0, parent2.length - 1);
  const parent2Rh = parent2.at(-1);

  // Find all the possible blood types
  const possibleBloods: string[] = [];
  for (let blood1 of possibleAlleles[parent1Blood]) {
    for (let blood2 of possibleAlleles[parent2Blood]) {
      const combination = combinations[blood1 + blood2];
      if (combination) {
        possibleBloods.push(combination);
      }
    }
  }

  // Find all the posible RH factors
  const possibleRH = parent1Rh === "-" && parent2 === "-" ? ["-"] : ["-", "+"];

  // Child
  const possibleChild: string[] = [];
  for (let blood of possibleBloods) {
    for (let rh of possibleRH) {
      if (!possibleChild.includes(blood + rh)) {
        possibleChild.push(blood + rh);
      }
    }
  }

  return possibleChild;
}

function secondCaseArray(parent: string, child: string) {
  const ans = [];
  for (let parent2 in possibleAlleles) {
    const positive = firstCaseArray(parent, parent2 + "+");
    if (positive.includes(child)) {
      ans.push(parent2 + "+");
    }

    if (firstCaseArray(parent, parent2 + "-").includes(child)) {
      ans.push(parent2 + "-");
    }
  }
  return ans;
}

function arrayToString(array: string[]): string {
  return array.length === 0
    ? "IMPOSSIBLE"
    : `{${array.reduce((prev, curr) => prev + ", " + curr)}}`;
}

// console.log(consanguineCalculations("AB- AB+ ?"));
console.log(consanguineCalculations("AB+ ? O+"));
