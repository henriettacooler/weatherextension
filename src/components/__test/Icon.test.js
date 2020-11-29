import {render} from '@testing-library/vue'
import Icon from '../Icon.vue'

test('increments value on click', async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.

  render(Icon, {props: {weatherIcon: {main: 'Clear', icon: '01d'}}})

  // queryByText returns the first matching node for the provided text
  // or returns null.
  //expect(weatherIcon.main).toBeTruthy()
  console.log('hej')

})