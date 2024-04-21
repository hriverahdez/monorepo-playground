import { reusableUtil } from "@monorepo/package-1";

export const complexPackage = () => {
  const res = "This is the complex package calling the utils";
  return [res, reusableUtil()];
};
