import renderer from "react-test-renderer"
import WelcomeTrivia from "../WelcomeTrivia"

describe("<WelcomeTrivia />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<WelcomeTrivia />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<WelcomeTrivia />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
