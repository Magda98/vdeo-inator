import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should render VideoInator', async () => {
    await render(AppComponent);
    screen.debug()
    screen.getByText('VideoInator');
  });
});
