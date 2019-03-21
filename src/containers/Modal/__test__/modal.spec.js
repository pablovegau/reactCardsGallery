import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Modal from '../modal';

const modalWithoutData = {
  showModal: true,
  edition: false,
  title: '',
  description: '',
  url: '',
  date: '',
  id: '',
};

const modalWithData = {
  showModal: true,
  edition: true,
  title: 'title',
  description: 'description',
  url: 'url',
  date: '',
  id: '',
};

const onClickMock = jest.fn();

describe('Name of the group', () => {
  it('should show the modal whit empties inputs', () => {
    const { getByLabelText } = render(<Modal modal={modalWithoutData} />);

    const title = getByLabelText(/title/i);
    expect(title).toHaveAttribute('value', '');

    const description = getByLabelText(/description/i);
    expect(description).toHaveAttribute('value', '');

    const url = getByLabelText(/url/i);
    expect(url).toHaveAttribute('value', '');
  });

  it('should show the modal whit data into the inputs', () => {
    const { getByLabelText } = render(<Modal modal={modalWithData} />);

    const title = getByLabelText(/title/i);
    expect(title).toHaveAttribute('value', modalWithData.title);

    const description = getByLabelText(/description/i);
    expect(description).toHaveAttribute('value', modalWithData.description);

    const url = getByLabelText(/url/i);
    expect(url).toHaveAttribute('value', modalWithData.url);
  });

  it('should ', () => {
    const { getByText } = render(<Modal modal={modalWithData} buttonModalEditCardPressed={onClickMock} />);

    const button = getByText(/edit/i);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
