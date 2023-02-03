import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../../utils/dimensions';
import {getValue} from '../../utils/lodash';

function ArrowDownSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getValue(props,`width`,'')?getValue(props,`width`,''):wp(24)}
      height={getValue(props,`height`,'')?getValue(props,`height`,''):hp(24)}
      viewBox="0 0 24 24"
      {...props}>
      <Path data-name="Path 9948" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 9949"
        d="M7 10l5 5 5-5z"
        fill={
          getValue(props, `color`, '')
            ? getValue(props, `color`, '')
            : '#5f6368'
        }
      />
    </Svg>
  );
}

export default ArrowDownSvgComponent;
