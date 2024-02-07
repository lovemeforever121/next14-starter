import { connectToDb } from "../../src/lib/utils";

test("connection to db is ok", () => {
  expect(()=>{connectToDb()}).toBe(true);
});
