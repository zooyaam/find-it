import { useState } from 'react';
import { ButtonVariable } from '@/components/common/molecule/ButtonVariable';
import { InputForm } from '@/components/SignIn/molecule/InputForm';
import { ButtonSelectLocal } from '@/components/common/molecule/ButtonSelectLocal';
import {
  FirstCategory,
  SecondCategory,
} from '@/components/common/molecule/SelectCategoryList';

const SignIn = () => {
  const handleSignIn = () => {
    alert('로그인 버튼 클릭 테스트');
  };

  return (
    <>
      <h2>SignIn</h2>
      <div className="mx-0 my-auto flex flex-col items-center">
        <form className="w-375px px-20px pt-16px" onSubmit={handleSignIn}>
          <div className="flex flex-col gap-20px">
            <InputForm
              type="email"
              name="useremail"
              placeholder="이메일 주소"
              alretText=""
            />
            <InputForm
              type="password"
              name="userpassword"
              placeholder="비밀번호(영어, 숫자, 특수문자 조합)"
              alretText="invalidValue"
            />
          </div>
          <div className="box-border flex flex-col items-center gap-[1rem]	pt-60px">
            <ButtonVariable
              buttonType="submit"
              buttonText="로그인"
              variant="normal"
            />
            <ButtonVariable
              buttonType="button"
              buttonText="회원가입"
              variant="lineStyle"
            />
          </div>
        </form>
      </div>
      <h4>지역 설정 테스트</h4>
      <ButtonSelectLocal isClick={false} />
      {/* <FirstCategory /> */}
      <SecondCategory selectedArea="서울" />
    </>
  );
};

export default SignIn;
