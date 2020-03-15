import { newE2EPage } from '@stencil/core/testing';

describe('pwc-map-corona', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pwc-map-corona></pwc-map-corona>');

    const element = await page.find('pwc-map-corona');
    expect(element).toHaveClass('hydrated');
  });
});
