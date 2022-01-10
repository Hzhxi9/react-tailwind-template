import React from 'react';

import { Card } from '@mui/material';

export default function Layout(props: { left: React.ReactNode; right: React.ReactNode }) {
  const { left, right } = props;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card variant="outlined" className="w-2/3 h-3/4 shadow-lg bg-white flex">
        <div className="w-1/5 bg-gray-50">{left}</div>
        <div className=" w-4/5"> {right}</div>
      </Card>
    </div>
  );
}
