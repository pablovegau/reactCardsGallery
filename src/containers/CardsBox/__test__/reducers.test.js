import reducer from '../reducers';
import { BUTTON_ADD_CARD_PRESSED } from '../../Modal/actions';
import { BUTTON_ORDER_BY_TITLE_PRESSED } from '../actions';

describe('todos reducer', () => {
  it('', () => {
    expect(reducer(undefined, {})).toEqual({
      cards: [],
    });
  });

  it('should handle BUTTON_ADD_CARD_PRESSED', () => {
    expect(
      reducer(
        {
          cards: [
            {
              title: 'title',
              description: 'description',
              url: 'url',
              date: 'date',
              id: 'date',
              veil: false,
            },
          ],
        },
        {
          type: BUTTON_ADD_CARD_PRESSED,
          payload: {
            title: 'title2',
            description: 'description2',
            url: 'url2',
            date: 'date2',
            id: 'date2',
          },
        },
      ),
    ).toEqual({
      cards: [
        {
          title: 'title',
          description: 'description',
          url: 'url',
          date: 'date',
          id: 'date',
          veil: false,
        },
        {
          title: 'title2',
          description: 'description2',
          url: 'url2',
          date: 'date2',
          id: 'date2',
          veil: false,
        },
      ],
    });
  });

  it('should handle BUTTON_ORDER_BY_TITLE_PRESSED', () => {
    expect(
      reducer(
        {
          cards: [
            {
              title: 'title',
              description: 'description',
              url: 'url',
              date: 'date',
              id: 'date',
              veil: false,
            },
            {
              title: 'atitle',
              description: 'description',
              url: 'url',
              date: 'date',
              id: 'date',
              veil: false,
            },
          ],
        },
        {
          type: BUTTON_ORDER_BY_TITLE_PRESSED,
        },
      ),
    ).toEqual({
      cards: [
        {
          title: 'atitle',
          description: 'description',
          url: 'url',
          date: 'date',
          id: 'date',
          veil: false,
        },
        {
          title: 'title',
          description: 'description',
          url: 'url',
          date: 'date',
          id: 'date',
          veil: false,
        },
      ],
    });
  });
});
