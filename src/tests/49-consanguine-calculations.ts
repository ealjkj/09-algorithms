import { expect, test } from "@jest/globals";
import consanguineCalculations from "../49-consanguine-calculations";

describe("consanguineCalculations", () => {
  it("should get the correct answer", () => {
    expect(consanguineCalculations("O+ O- ?")).toBe("O+ O- {O+, O-}");
    expect(consanguineCalculations("O+ ? O")).toBe(
      "O+ {A-, A+, B-, B+, O-, O+} O"
    );
    expect(consanguineCalculations("AB- AB+ ?")).toBe(
      "AB- AB+ {A+, A-, B+, B-, AB+, AB-}"
    );
    expect(consanguineCalculations("AB+ ? O+")).toBe("AB+ IMPOSSIBLE O+");
  });
});
