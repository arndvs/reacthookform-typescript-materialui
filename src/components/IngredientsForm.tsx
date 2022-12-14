import React, { FC } from 'react';
import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { IRecipe } from '@src/lib/interfaces/IRecipe';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const IngredientsForm: FC = () => {
  const classes = useStyles();

  const { control, register, watch } = useFormContext<IRecipe>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<IRecipe, 'ingredients', 'ingredientId'>(
    {
      control,
      name: 'ingredients',
      keyName: 'ingredientId',
    }
  );

  console.log('ingredients are', watch('ingredients'));

  return (
    <>
      <Grid container direction="row">
        {fields.map((item, index) => (
          <Grid container item xs={12} key={item.ingredientId}>
            <Grid item>
              <Controller
                name={`ingredients.${index}.name`}
                control={control}
                defaultValue={item.name}
                render={({ field }) => <TextField {...field} />}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  remove(index);
                }}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => {
              append({ ingredientId: fields.length.toString(), name: '' });
            }}
          >
            Add Ingredient
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default IngredientsForm;
