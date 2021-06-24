import React from "react";
import { Form, Input } from "antd";
import Button from "../../../components/Button";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "debounce";

//layout form
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};
// validate
const validateSchema = Yup.object().shape({
  email: Yup.string().email().required("this filed is required"),
  password: Yup.string().min(4).required("this filed is require"),
});

// form fotmat
function FormLogin(props) {
  const [isValid, setIsValid] = React.useState({
    email: false,
    password: false,
  });
  const isFormValid = Object.values(isValid).every((val) => val);
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form {...layout} size="large"  initialValues={{ username:'default value' }}onFinish={handleSubmit(onSubmit)}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="email"
            name="email"
            validateStatus={errors.email ? "error" : "success"}
            help={errors.email ? errors.email.message : null}
            hasFeedback
            onChange={debounce(async () => {
              const result = await trigger("email");
              setIsValid((prevState) => ({ ...prevState, email: result }));
            }, 500)}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="password"
            name="password"
            validateFirst={true}
            validateStatus={errors.password ? "error" : "validating"}
            help={errors.password ? errors.password.message : null}
            onChange={debounce(async () => {
              const result = await trigger("password");
              setIsValid((prevState) => ({ ...prevState, password: result }));
            }, 500)}
          >
            <Input.Password {...field} />
          </Form.Item>
        )}
      />

      <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
        <Button label="FORGOT YOUR PASSWORD?" fontSize="12px" borderWidth="0" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          label="LOG IN"
          backgroundColor={
            isFormValid ? "rgb(41, 172, 0)" : "rgb(248, 249, 252)"
          }
          borderWidth="0"
          fontSize="16px"
          type="submit"
          disabled={!isFormValid}
        />
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
