import {render, screen} from '@testing-library/vue'
import Icon from '../../src/components/Icon.vue'


test('show sun symbol when clear at daytime', async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.
  render(Icon, {props: {weatherIcon: {main: 'clear', icon: '01d'}}})
  expect(screen.queryByText('☀️')).toBeTruthy()
})

test('show moon symbol when clear at nighttime', async () => {
  render(Icon, {props: {weatherIcon: {main: 'clear', icon: ''}}})
  expect(screen.queryByText('🌙')).toBeTruthy()
})

test('show cloud symbol when clouds', async () => {
  render(Icon, {props: {weatherIcon: {main: 'clouds', icon: ''}}})
  expect(screen.queryByText('☁️')).toBeTruthy()
})

test('show snow symbol when snow', async () => {
  render(Icon, {props: {weatherIcon: {main: 'snow', icon: ''}}})
  expect(screen.queryByText('❄️')).toBeTruthy()
})

test('show rain symbol when rain', async () => {
  render(Icon, {props: {weatherIcon: {main: 'rain', icon: ''}}})
  expect(screen.queryByText('☔️')).toBeTruthy()
})

test('show rain symbol when drizzle', async () => {
  render(Icon, {props: {weatherIcon: {main: 'drizzle', icon: ''}}})
  expect(screen.queryByText('☔️')).toBeTruthy()
})

test('show thunderstorm symbol when thunderstorm', async () => {
  render(Icon, {props: {weatherIcon: {main: 'thunderstorm', icon: ''}}})
  expect(screen.queryByText('⛈')).toBeTruthy()
})