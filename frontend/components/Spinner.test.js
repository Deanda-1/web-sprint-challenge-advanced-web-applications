 import Spinner from "./Spinner"
 import React from "react" 
 import { render } from "@testing-library/react"


test('sanity', () => {
  expect(true).toBe(true)
})

test('spinner renders', () => {
  render(<Spinner on={true} />)
})

test('spinner does not render' , () => {
  render(<Spinner on={false} />)
})