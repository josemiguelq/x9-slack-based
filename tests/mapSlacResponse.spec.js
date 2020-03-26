import mapSlackResponse from "../src/services/mapSlackResponse";
import stubResponse from "./stubResponse";

describe("MappingSlack", () => {
    it("renders by property", () => {
        const response = mapSlackResponse(stubResponse)
        expect(response[0].by).toEqual('User1')
    });

    it("renders PR property", () => {
        const response = mapSlackResponse(stubResponse)
        expect(response[0].pr).toEqual(' :branch: pr/64')
    });

    it("renders history property array", () => {
        const response = mapSlackResponse(stubResponse)
        expect(response[0].history).toHaveLength(1)
    });
});
