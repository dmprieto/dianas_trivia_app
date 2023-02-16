import renderer from "react-test-renderer"

import { MultipleOptions } from "../MultipleOptions"

describe("<MultipleOptions />", () => {
  const options = [{ id: "opt1", name: "" }]
  const answer = ""
  const setAnswer = () => {}
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <MultipleOptions
          options={options}
          answer={answer}
          setAnswer={setAnswer}
        />
      )
      .toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MultipleOptions
          options={options}
          answer={answer}
          setAnswer={setAnswer}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
