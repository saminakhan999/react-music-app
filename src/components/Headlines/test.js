import { screen, within, act } from '@testing-library/react';
import Headlines from '.';

import axios from 'axios';
jest.mock('axios');


describe('Headlines', () => {
  const stubStories = [
    { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
    { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
  ]
  const stubHandleStorySelect = jest.fn()

  beforeEach(() => jest.resetAllMocks())

  test('it makes a request to the api on load and renders returned headlines', async () => {
      axios.get.mockResolvedValue({ data: stubStories })
      render(<Headlines handleSelect={stubHandleStorySelect}/>);
      expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/articles/));
      const firstStory = (await screen.findAllByRole('listitem'))[0];
      const firstHeadline = within(firstStory).getByRole('heading', { name: "headline" });
      expect(firstHeadline.textContent).toBe('Test Story 1')
  })

  
  test('it renders no stories on failed api request', async () => {
      axios.get.mockRejectedValue(new Error('Bad Things'))
      render(<Headlines handleSelect={stubHandleStorySelect}/>);
      const errorMsg = await screen.findByRole('alert')
      expect(errorMsg).toBeInTheDocument();
  })
  
  test("it triggers handleStorySelect prop when a story headline is clicked", async () => {
      axios.get.mockResolvedValue({ data: stubStories })
      render(<Headlines handleSelect={stubHandleStorySelect}/>);
      const firstStory = (await screen.findAllByRole('listitem'))[0];
      userEvent.click(firstStory)
      expect(stubHandleStorySelect).toHaveBeenCalled();
  })
  
});