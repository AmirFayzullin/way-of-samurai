import Status from "./Status";
import renderer from 'react-test-renderer';

describe("Status component tests", () => {
    test("span should be displayed after creation", () => {
       const component = renderer.create(<Status status="stat"/>);
       const root = component.root;
       const p = root.findByType("p");
       expect(p).not.toBeNull();
    });

    test("span value should be correct", () => {
        const status = "My stat";
        const component = renderer.create(<Status status={status}/>);
        const root = component.root;
        const p = root.findByType("p");
        expect(p.props.children).toBe(status);
    });

    test("after dbclick input should be displayed", () => {
        const component = renderer.create(<Status status={"status"}/>);
        const root = component.root;
        const p = root.findByType("p");
        renderer.act(() => {
            p.props.onDoubleClick();
        });
        const input = root.findByType("input");
        expect(input).not.toBeNull();
    });

    test("input shouldn't be displayed at first render", () => {
        const component = renderer.create(<Status status={"status"}/>);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
});