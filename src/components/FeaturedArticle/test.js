import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedArticle from '.';

import axios from 'axios';
jest.mock('axios');

describe('FeaturedArticle', () => {
  let stubStory = { id: 1, headline: 'Test Headline 1', snippet: 'Once upon a time...', body: 'Test body' }

  beforeEach(() => jest.resetAllMocks())

  test("renders 'loading' on initial load'", () => {
    render(<FeaturedArticle />, { wrapper: MemoryRouter });
    const feature = screen.getByLabelText('featured story');
    expect(feature.textContent).toContain('Loading');
  })

  test("loads story data", async () => {
    axios.get.mockResolvedValue({ data: stubStory })
    render(<FeaturedArticle />, { wrapper: MemoryRouter });
    expect(axios.get).toHaveBeenCalledTimes(1);
    const feature = await screen.findByLabelText('featured story');
    expect(feature.textContent).toContain(stubStory.body);
  })

  test('it shows an error message on failed api request', async () => {
    axios.get.mockRejectedValue(new Error('Bad Things'))
    render(<FeaturedArticle />, { wrapper: MemoryRouter });
    const feature = await screen.findByLabelText('featured story');
    expect(feature.textContent).toContain('Bad Things');
  })

});