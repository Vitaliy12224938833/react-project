import React from 'react';
import { SaveOrRemoveButton } from './SaveOrRemoveButton';

const MediaSaveButtons = React.memo(({ id, mediaType }) => (
  <>
    <SaveOrRemoveButton category={'favorites'} mediaType={mediaType} id={id}>
      favorites
    </SaveOrRemoveButton>
    <SaveOrRemoveButton category={'watched'} mediaType={mediaType} id={id}>
      watched
    </SaveOrRemoveButton>
    <SaveOrRemoveButton
      category={'want-to-watch'}
      mediaType={mediaType}
      id={id}
    >
      want to watch
    </SaveOrRemoveButton>
  </>
));
export default MediaSaveButtons;
