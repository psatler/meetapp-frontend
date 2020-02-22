import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useField } from '@rocketseat/unform';

import api from '../../services/api';
import LoadingIcon from '../LoadingIcon';
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

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

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
    if (e.target.files && e.target.files[0]) {
      setImageLoaded(false);

      const data = new FormData();
      // eslint-disable-next-line
      data.append('file', e.target.files![0]);

      const response = await api.post('files', data);

      setImageLoaded(false);

      const { id, url } = response.data;
      setFile(id);
      setPreview(url);
    }
  }

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  function handleImageLoadError() {
    toast.error('The image could not be loaded!');
    setShowErrorToast(true);
  }

  return (
    <Container
      isMeetupBanner={isMeetupBanner}
      disableInputs={disableInputs}
      isImageLoaded={imageLoaded}
    >
      <label htmlFor={inputId}>
        <img
          src={
            preview ||
            `https://api.adorable.io/avatars/${
              isMeetupBanner ? '800' : '50'
            }/abott@adorable.png`
          }
          alt=""
          onLoad={handleImageLoaded}
          onError={handleImageLoadError}
        />

        <LoadingIcon
          containerHeight={isMeetupBanner ? 300 : 120}
          borderColor="#f3f3f3"
          borderTopColor="#f94d6a"
          borderSize={8}
          loaderSize={60}
          // if image is not loaded and no error has happened, display load icon
          displayLoadingIcon={!imageLoaded && !showErrorToast}
          message={
            isMeetupBanner
              ? 'Loading banner image...'
              : 'Loading avatar image...'
          }
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
