import { useState } from 'react';
import { IconDelete } from '@/components/common/atom/IconDelete';
import { IconEyeOff } from '@/components/SignIn/atom/IconEyeOff';
import { IconEyeOn } from '@/components/SignIn/atom/IconEyeOn';
import { ButtonDoubleCheck } from '@/components/SignIn/atom/ButtonDoubleCheck';

export const EyeToggle = ({ isShow }) => {
  const [isEyeOn, setIsEyeOn] = useState(false);
  const toggleEye = () => {
    setIsEyeOn(!isEyeOn);
  };

  if (isShow) {
    return (
      <>
        <button className="inline pr-2.5 " onClick={toggleEye}>
          {isEyeOn && <IconEyeOn />}
          {!isEyeOn && <IconEyeOff />}
        </button>
      </>
    );
  } else {
    return null;
  }
};

export const DeleteContent = ({ isShow }) => {
  const buttonTest = () => {
    alert('아이온 클릭 테스트');
  };
  if (isShow) {
    return (
      <button className="inline pr-2.5 " onClick={buttonTest}>
        <IconDelete color="#4785ff" />
      </button>
    );
  } else {
    return null;
  }
};
export const DoubleCheck = ({ isShow }) => {
  const buttonTest = () => {
    alert('아이온 클릭 테스트');
  };
  if (isShow) {
    return (
      <button className="inline pr-2.5 " onClick={buttonTest}>
        <ButtonDoubleCheck />
      </button>
    );
  } else {
    return null;
  }
};

// export const ButtonIcon = ({ iconName }) => {
//   const buttonTest = () => {
//     alert('엑스,눈,중복확인 클릭 테스트');
//   };
//   const iconMap = {
//     deleteContent: <IconDelete color="#4785ff" />,
//     eyeoff: <IconEyeOff />,
//     eyeon: <IconEyeOn />,
//     dubleCheck: <ButtonDoubleCheck />,
//   };
//   const renderIcon = iconMap[iconName];

//   if (!iconMap || !renderIcon) {
//     return null;
//   }

//   return (
//     <button className="inline pr-2.5 " onClick={buttonTest}>
//       {renderIcon}
//     </button>
//   );
// };