import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return id description', () => {
        const query = "id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "I dont know what is your andrew id."
          ));
    });

    test('should return id description', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "I dont know your name."
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find the max number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 13, 42, 26?")).toEqual("42");
        expect(QueryProcessor("Which of the following numbers is the largest: 45, 5, 99?")).toEqual("99");
    });
});