import { expect } from "@jest/globals"
import MergeOptions from "../MergeOptions"

describe("MergeOptions", () => {
  it("blank correct answer", () => {
    const blankCorrectQuestion = {
      correct_answer: "",
      incorrect_answers: ["ans1", "ans2"]
    }
    const res = MergeOptions(blankCorrectQuestion)
    expect(res).toHaveLength(0)
  })

  it("empty incorrect answers", () => {
    const blankCorrectQuestion = {
      correct_answer: "ans",
      incorrect_answers: []
    }
    const res = MergeOptions(blankCorrectQuestion)
    expect(res).toHaveLength(0)
  })

  it("simple merge", () => {
    const simpleQuestion = {
      correct_answer: "ans",
      incorrect_answers: ["ans1", "ans2"]
    }
    const res = MergeOptions(simpleQuestion)
    expect(res).toHaveLength(3)
  })
})
