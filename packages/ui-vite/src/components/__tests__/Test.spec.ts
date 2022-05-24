import Test from '../Test'
import { render } from '@testing-library/vue'
test('it should work', () => {
  const { getByText } = render(Test, {
  })

  // assert output
  getByText('Hello')
})
