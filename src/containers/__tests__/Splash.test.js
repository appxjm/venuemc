import renderer from 'react-test-renderer'
import Splash from '../Splash'

it('renders correctly', () => {
  const tree = renderer
    .create(<Splash />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})