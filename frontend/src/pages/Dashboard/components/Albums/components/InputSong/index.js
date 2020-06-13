import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdMusicNote } from 'react-icons/md';

import { Container, Content, Edit, DivMusic } from './styles';

function InputThumbnail({ data, onFileUploaded }) {
  const [visible, setVisible] = useState(false);
  const [nameFile, setNameFile] = useState('');

  const [selectedFileUrl, setSelectedFileUrl] = useState(
    data && data.path ? data.thumbnail : ''
  );

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
      setNameFile(file.name);
    },
    [onFileUploaded]
  );

  function handleVisible() {
    setVisible(!visible);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container
      onMouseEnter={handleVisible}
      onMouseLeave={() => setVisible(false)}
    >
      <Content className="dropzone" {...getRootProps()}>
        <input
          {...getInputProps()}
          accept="audio/mpeg, audio/x-wav, .mp3, .wav"
        />
        {selectedFileUrl ? (
          <DivMusic>
            <MdMusicNote /> {nameFile}
          </DivMusic>
        ) : isDragActive ? (
          <p>Solte aqui</p>
        ) : (
          <p>Arraste e solte a música</p>
        )}
        <Edit visible={visible}>
          <MdMusicNote /> <span>Escolha uma música</span>
        </Edit>
      </Content>
    </Container>
  );
}

export default InputThumbnail;
