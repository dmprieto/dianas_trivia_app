import renderer from "react-test-renderer"
import { CategoryCard } from "../CategoryCard"

describe("<CategoryCard />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<CategoryCard />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<CategoryCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
