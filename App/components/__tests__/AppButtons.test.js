import renderer from "react-test-renderer"

import { AppButton } from "../AppButton"

describe("<AppButton />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<AppButton />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<AppButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
