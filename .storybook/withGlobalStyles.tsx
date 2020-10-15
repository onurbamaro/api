import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/global'


const withGloblStyles = (storyFn: StoryFn) => (
  <>
  <GlobalStyles />
  {storyFn()}
  </>
)

export default withGloblStyles
