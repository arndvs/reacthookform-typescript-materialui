import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const subComponent1: FC = () => {
    const { control, formState: { errors },} = useFormContext();
    return (
    <>
        <Controller
            name="email"
            control={control}
            defaultValue="example@dev.com"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
          <br />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
    </>
    )
};

export default subComponent1;
