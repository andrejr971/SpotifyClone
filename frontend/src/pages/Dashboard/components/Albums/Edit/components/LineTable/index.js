import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';

import { songDeleteRequest } from '../../../../../../../store/modules/song/actions';

import { Line, Music, Details, Options } from './styles';

function LineTable({ data }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleVisible() {
    setVisible(!visible);
  }

  function handleDelete() {
    dispatch(songDeleteRequest(data.id, data.album.id));
  }

  return (
    <Line onMouseEnter={handleVisible} onMouseLeave={handleVisible}>
      <Music>
        <Details>
          <h3>{data.title}</h3>
        </Details>
      </Music>
      <Options>
        <div>
          <button type="button" onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      </Options>
    </Line>
  );
}

export default LineTable;
