import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';

import api from '../../services/api';
import { Container } from './styles';

interface OwnProps {
  name: string;
  inputId: string;
  fieldToGet: string;
  isMeetupBanner?: boolean;
  disableInputs?: boolean;
}

export default function ImageInput({
  inputId,
  fieldToGet,
  isMeetupBanner,
  disableInputs,
}: OwnProps) {
  const ref = useRef() as React.RefObject<HTMLInputElement>;
  const { defaultValue, registerField } = useField(fieldToGet);

  const [file, setFile] = useState(defaultValue?.id); // id returned by the api to be set in the data field
  const [preview, setPreview] = useState(defaultValue?.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: inputId,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [inputId]); //eslint-disable-line

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const data = new FormData();
    // eslint-disable-next-line
    data.append('file', e.target.files![0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container isMeetupBanner={isMeetupBanner} disableInputs={disableInputs}>
      <label htmlFor={inputId}>
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />

        <input
          type="file"
          id={inputId}
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          disabled={disableInputs}
        />
      </label>
    </Container>
  );
}
