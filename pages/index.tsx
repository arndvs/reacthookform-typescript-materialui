// index.tsx
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import styles from '../styles/Home.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubComponent1 from '@src/components/SubComponent1';
import SubComponent2 from '@src/components/SubComponent2';

interface IFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    firstName: yup.string().required(),
    lastName: yup.string().required()
  });

const Home: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is', data);
  };

  console.log(methods.watch('email'));
  console.log('watch variable email', methods.watch('email'));

  return (
    <div className={styles.container}>

       <main className={styles.main}>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                <SubComponent1 />
                <br />
                <br />
                <SubComponent2 />
            <input type="submit" />
            </form>
        </FormProvider>
      </main>

    </div>
  );
};

export default Home;
