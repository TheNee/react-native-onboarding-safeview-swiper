import React from 'react'

import TextButton from './TextButton'
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util'

const DoneButton = ({ doneLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginLeft: MARGIN_RIGHT }}
    textStyle={getDefaultStyle(isLight)}
    {...rest}
  >
    {doneLabel || 'Done'}
  </TextButton>
)

export default DoneButton
