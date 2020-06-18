import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdInsertPhoto } from 'react-icons/md';

import { Container, Content, Edit } from './styles';

function Avatar({ data, onFileUploaded }) {
  const [visible, setVisible] = useState(false);

  const [selectedFileUrl, setSelectedFileUrl] = useState(
    data && data.path ? data.perfil : ''
  );

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
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
        <input {...getInputProps()} accept="image/*" />
        {selectedFileUrl ? (
          <img src={selectedFileUrl} alt="Perfil" />
        ) : isDragActive ? (
          <p>Solte aqui</p>
        ) : (
          <p>Arraste e solte a imagem</p>
        )}
        <Edit visible={visible}>
          <MdInsertPhoto /> <span>Escolha uma imagem</span>
        </Edit>
      </Content>
    </Container>
  );
}

export default Avatar;
