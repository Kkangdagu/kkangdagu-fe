'use client';

import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { isLogin } from '@/utils/isLogin';

import EditPagePresenter from './EditPage.presenter';

export default function EditPageContainer() {
  // 로그인 확인
  useEffect(() => {
    if (!isLogin()) {
      redirect('/');
    }
  }, []);

  const router = useRouter();

  // 초기값
  const [email, setEmail] = useState(localStorage.getItem('userId')!);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    setName(currentName);
  };
  const onChangeBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    const currentBirthDate = e.target.value;
    setBirthDate(currentBirthDate);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
  };

  const editMember = () => {
    const body = {
      email,
      password,
      name,
      dateOfBirth: birthDate,
      telNo: phone,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/modify`, body)
      .then((res) => {
        router.push('/myPage');
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  const deleteMember = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/delete`, {
        params: { email },
      })
      .then((res) => {
        if (res.status === 200) {
          router.push('/');
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <EditPagePresenter
      email={email}
      deleteMember={deleteMember}
      editMember={editMember}
      onChangeBirthDate={onChangeBirthDate}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePhone={onChangePhone}
      onChangePassword={onChangePassword}
    />
  );
}
