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

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 40 minus 47?")).toEqual("-7");
        expect(QueryProcessor("What is 45 minus 34?")).toEqual("11");
    });

    test('should find the max number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 13, 42, 26?")).toEqual("42");
        expect(QueryProcessor("Which of the following numbers is the largest: 45, 5, 99?")).toEqual("99");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 64 multiplied by 2?")).toEqual("128");
        expect(QueryProcessor("What is 92 multiplied by 1?")).toEqual("92");
    });

    test('should find numbers that is both a square and a cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1720, 1444, 2113, 64, 4007, 1042, 1331?")).toEqual("64");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1855, 4642, 2197, 1, 4900, 4451, 3146?")).toEqual("1");
    });

});