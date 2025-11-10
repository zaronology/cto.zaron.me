'use client';
import React, { useEffect, useState } from 'react';

const NewsLetterForm = ({ status, message, onValidated }) => {
  let email;
  const isMount = false;

  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  if (!isMount) {
    return null;
  }
  return <></>;
};

export default NewsLetterForm;
