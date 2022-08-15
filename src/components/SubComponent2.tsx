import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const subComponent2: FC = () => {
    const { control, formState: {},} = useFormContext();
    return (
    <>
        <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            )}
          />
          <br />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            )}
          />
    </>
    )
};

export default subComponent2;
